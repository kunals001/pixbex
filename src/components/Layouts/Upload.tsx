"use client";

import axios from "axios";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { useRef, useState } from "react";

import { Progress } from "@/components/ui/progress";

interface UploadProps {
  setCoverImg: (url: string) => void;
  onUploadComplete?: (url: string) => void;
  text:string
}

const Upload = ({setCoverImg, onUploadComplete,text }: UploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortController = new AbortController();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const authenticator = async (): Promise<{
    signature: string;
    expire: number;
    token: string;
    publicKey: string;
  }> => {
    const res = await axios.get(`${API_URL}/api/auth/upload`);
    const data = res.data;

    const { signature, expire, token, publicKey } = data;

    if (!signature || !token || !publicKey || !expire) {
      throw new Error("Invalid upload auth response");
    }

    return { signature, expire: Number(expire), token, publicKey };
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setProgress(0);
    setUploading(true);

    try {
      const { signature, expire, token, publicKey } = await authenticator();

      const uploadResponse = await upload({
        file,
        fileName: file.name,
        expire,
        token,
        signature,
        publicKey,
        abortSignal: abortController.signal,
        onProgress: (e) => {
          if (e.total) {
            const percent = Math.round((e.loaded / e.total) * 100);
            setProgress(percent);
          }
        },
      });

      const uploadedURL = uploadResponse.url;

      if (uploadedURL) {
        setCoverImg(uploadedURL);
        onUploadComplete?.(uploadedURL);
      } else {
        console.error("Upload response URL is undefined");
      }
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message);
      } else {
        console.error("Upload error:", error);
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <label className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer inline-block">
        {text}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {uploading && (
        <div className="mt-4">
          <Progress value={progress} />
          <p className="text-sm mt-1">{progress}%</p>
        </div>
      )}
    </div>
  );
};

export default Upload;

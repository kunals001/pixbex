"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Upload from "@/components/Layouts/Upload";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updatePost } from "@/redux/slice/adminSlice";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react";
import axios from "axios";
import {useRouter} from "next/navigation"

const UpdatePost = () => {
  const { postId } = useParams();
  const dispatch = useAppDispatch();
  const { loading, user } = useAppSelector((state) => state.admin);

  const router = useRouter()

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cate, setCate] = useState("");
  const [video, setVideo] = useState("");
  const [tech, setTech] = useState("");

  // Check admin
  useEffect(() => {
    if (user && !user.isAdmin) {
      toast.error("Access denied");
      window.location.href = "/";
    }
  }, [user]);

  // Fetch post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/post/get-post/${postId}`,
          { withCredentials: true }
        );
        const post = res.data.post;
        setTitle(post.title);
        setDesc(post.desc);
        setCate(post.cate);
        setVideo(post.video);
        setTech(post.tech);
      } catch (error) {
        toast.error("Failed to load post details");
      }
    };

    if (postId) fetchPost();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateData = {
      title,
      desc,
      cate,
      video,
      tech,
    };

    const result = await dispatch(updatePost({ postId: postId as string, updateData }));

    if (updatePost.fulfilled.match(result)) {
      toast.success("Post updated successfully");

      setTitle("");
      setDesc("");
      setCate("");
      setVideo("");
      setTech("");

      router.push("/dashboard/?tab=posts");
    } else {
      toast.error(result.payload || "Update failed");
    }
  };

  const className =
    "md:px-[1vw] md:py-[.4vw] outline-none md:text-[1vw] rounded-lg bg-zinc-800 text-zinc-200";

  return (
    <div className="p-1 flex flex-col items-center pb-6">
      <div className="flex flex-col">
        <h1 className="md:text-[2vw] text-center font-prime font-[600] text-zinc-200">
          Update Post
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col md:w-[40vw] gap-2">
          <input
            type="text"
            placeholder="Title goes here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={className}
          />

          <textarea
            placeholder="Write a description here"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="md:px-[1vw] md:py-[.4vw] outline-none md:text-[1vw] rounded-lg bg-zinc-800 min-h-[10vh] resize-none text-zinc-200"
          />

          <div className="flex items-center w-full justify-between gap-x-4">
            <Upload text="Upload Cover Video" setCoverImg={setVideo} />

            <div className="md:px-[1vw] md:py-[.4vw] outline-none md:text-[1vw] rounded-lg bg-zinc-800 text-zinc-400 text-center cursor-pointer">
              <select
                value={cate}
                onChange={(e) => setCate(e.target.value)}
                className="cursor-pointer w-full outline-none border-none bg-zinc-800"
              >
                <option value="">Select Post Category</option>
                <option value="ecommerce">E-commerce</option>
                <option value="blog">Blog</option>
                <option value="landing">Landing Page</option>
                <option value="social">Social</option>
              </select>
            </div>
          </div>

          <input type="text" value={tech} onChange={(e) => setTech(e.target.value)} className={className} />

          <button
            type="submit"
            disabled={loading}
            className="w-full md:px-[1vw] md:py-[.4vw] outline-none md:text-[1vw] rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 text-zinc-200 font-[700] text-center cursor-pointer "
          >
            {loading ? (
              <Loader className="text-zinc-200 mx-auto animate-spin" />
            ) : (
              "Update Post"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;

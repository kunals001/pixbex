"use client";

import React, { useState } from "react";
import Editor from "./Editor";
import Upload from "./Upload";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createPost } from "@/redux/slice/adminSlice";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cate, setCate] = useState("");
  const [video, setVideo] = useState("");
  const [tech, setTech] = useState("");

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.admin);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title,
      desc,
      cate,
      video,
      tech,
    };

    const resultAction = await dispatch(createPost(data));

  if (createPost.fulfilled.match(resultAction)) {
  toast.success("Post created successfully");

  setTitle("");
  setDesc("");
  setCate("");
  setVideo("");
  setTech("");
  } else {
  toast.error((resultAction.payload as string) || "Something went wrong");
  }
  };

  const className =
    "md:px-[1vw] md:py-[.4vw] outline-none md:text-[1vw] rounded-lg bg-zinc-800 text-zinc-200";

  return (
    <div className="p-1 flex flex-col items-center pb-6">
     <div className="flex flex-col">   
      <h1 className="md:text-[2vw] text-center font-prime font-[600] text-zinc-200">
        Create New Post
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

        <label htmlFor="tech" className="md:text-[1.2vw] text-zinc-500">
          Write about the Technologies used
        </label>
        <Editor value={tech} onChange={setTech} />

        <button
          type="submit"
          disabled={loading}
          className="w-full md:px-[1vw] md:py-[.4vw] outline-none md:text-[1vw] rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 text-zinc-200 font-[700] text-center cursor-pointer "
        >
          {loading ? (
            <Loader className="text-zinc-200 mx-auto animate-spin" />
          ) : (
            "Add Post"
          )}
        </button>
      </form>

      {error && (
        <div className="w-[40vw] px-[1vw] py-[.5vw] rounded-md bg-zinc-800 mt-2">
          <span className="text-red-500 md:text-[1vw] font-[500]">Error</span>
          <p className="text-zinc-300 md:text-[.8vw] font-[400] mt-1">{error}</p>
        </div>
      )}
     </div>
    </div>
  );
};

export default AddPost;

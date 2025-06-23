"use client";

import React, { useState } from "react";
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
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.admin);

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title,
      desc,
      cate,
      video,
      tech,
      skills,
    };

    const resultAction = await dispatch(createPost(data));

    if (createPost.fulfilled.match(resultAction)) {
      toast.success("Post created successfully");

      setTitle("");
      setDesc("");
      setCate("");
      setVideo("");
      setTech("");
      setSkills([]);
      setSkillInput("");
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
                <option value="E-commerce">E-commerce App</option>
                <option value="Blog App">Blog App</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Social App">Social Media</option>
              </select>
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter Website Link"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className={className}
          />

          {/* Skill input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className={className + " w-full"}
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="md:px-[1vw] md:py-[.4vw] bg-green-600 text-white rounded-lg text-sm"
            >
              Add
            </button>
          </div>

          {/* Show added skills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-zinc-700 text-zinc-200 rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

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

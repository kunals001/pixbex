"use client";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { sendHireRequest } from "@/redux/slice/adminSlice";
import { toast } from "react-hot-toast";

const HireForm = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.admin);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    referenceWebsite: "",
    pages: "",
    deadline: "",
    budget: "",
    preferredCommunication: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await dispatch(sendHireRequest(form)).unwrap();
      toast.success("Message sent successfully");
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        description: "",
        referenceWebsite: "",
        pages: "",
        deadline: "",
        budget: "",
        preferredCommunication: "",
        message: "",
      });
      setOpen(false);
    } catch (err) {
      console.error("Submit Error:", err);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="w-full md:w-[50vw] max-h-[90vh] overflow-y-auto bg-zinc-900/80 backdrop-blur-md rounded-xl p-[5vw] md:p-[3vw] shadow-[0_0_20px_#a855f733] border border-zinc-700 relative">
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-4 text-zinc-400 hover:text-red-500 text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-zinc-100 text-center text-2xl md:text-3xl font-bold mb-6 tracking-tight">
        Let's Build Something Great
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your Name *" className="inputStyle" />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your Email *" className="inputStyle" />
        <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone" className="inputStyle" />
        <input name="projectType" value={form.projectType} onChange={handleChange} type="text" placeholder="Project Type *" className="inputStyle" />
        <textarea name="description" value={form.description} onChange={handleChange} rows={3} placeholder="Describe Your Project *" className="inputStyle resize-none" />
        <input name="referenceWebsite" value={form.referenceWebsite} onChange={handleChange} type="text" placeholder="Reference Website" className="inputStyle" />
        <input name="pages" value={form.pages} onChange={handleChange} type="text" placeholder="Approx. No. of Pages" className="inputStyle" />
        <input name="deadline" value={form.deadline} onChange={handleChange} type="text" placeholder="Deadline" className="inputStyle" />
        <input name="budget" value={form.budget} onChange={handleChange} type="text" placeholder="Budget" className="inputStyle" />
        <input name="preferredCommunication" value={form.preferredCommunication} onChange={handleChange} type="text" placeholder="Preferred Communication (Email, WhatsApp, etc.)" className="inputStyle" />
        <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any Additional Message" className="inputStyle resize-none" />

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-[1.2vh] md:py-[0.8vw] rounded-md shadow-lg hover:opacity-90 transition-all duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <style jsx>{`
        .inputStyle {
          width: 100%;
          background: rgba(39, 39, 42, 0.7);
          color: #f4f4f5;
          padding: 1rem;
          border-radius: 0.75rem;
          border: 1px solid #3f3f46;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
        }

        .inputStyle::placeholder {
          color: #a1a1aa;
        }

        .inputStyle:hover {
          border-color: #a855f7;
        }

        .inputStyle:focus {
          background: rgba(39, 39, 42, 0.9);
          border-color: #a855f7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.3);
        }

        textarea.inputStyle {
          min-height: 90px;
        }
      `}</style>
    </div>
  );
};

export default HireForm;

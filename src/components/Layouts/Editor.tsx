"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import React, { useEffect } from "react";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: value || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm p-4 rounded-md bg-zinc-200 focus:outline-none min-h-[16vw] border border-gray-300 overflow-y-auto",
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  if (!editor) return null;

  const baseBtn = "px-2 py-1 rounded-md transition cursor-pointer text-sm text-zinc-200";
  const activeBtn = "bg-blue-500 font-semibold";

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 px-3 py-2 rounded-md bg-zinc-800 shadow-sm">
        {[
          { label: "B", action: () => editor.chain().focus().toggleBold().run(), active: editor.isActive("bold") },
          { label: "I", action: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive("italic") },
          { label: "U", action: () => editor.chain().focus().toggleUnderline().run(), active: editor.isActive("underline") },
          { label: "S", action: () => editor.chain().focus().toggleStrike().run(), active: editor.isActive("strike") },
          { label: "H1", action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: editor.isActive("heading", { level: 1 }) },
          { label: "H2", action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive("heading", { level: 2 }) },
          { label: "H3", action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive("heading", { level: 3 }) },
          { label: "• List", action: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive("bulletList") },
          { label: "1. List", action: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive("orderedList") },
          { label: "↶ Undo", action: () => editor.chain().focus().undo().run(), active: false },
          { label: "↷ Redo", action: () => editor.chain().focus().redo().run(), active: false },
        ].map((btn, i) => (
          <button
            key={i}
            type="button"
            onClick={btn.action}
            className={`${baseBtn} ${btn.active ? activeBtn : ""}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Editor Content */}
      <div className="relative">
        {!value && (
          <div className="absolute text-gray-500 top-4 left-4 pointer-events-none select-none text-sm">
            Write about the Ingredients
          </div>
        )}
        <EditorContent
          editor={editor}
          className="bg-zinc-800 text-zinc-200 rounded-md [&_.ProseMirror]:bg-zinc-800 [&_.ProseMirror]:text-white [&_.ProseMirror]:border-none [&_.ProseMirror]:outline-none"
        />
      </div>
    </div>
  );
};

export default Editor;

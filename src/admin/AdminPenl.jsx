import React, { useState } from "react";
import axios from "axios";
import { db } from "../../firebase"; // Firestore
import { collection, addDoc } from "firebase/firestore";

const CLOUD_NAME = "dp3nm0gjy";
const UPLOAD_PRESET = "omegaT4560";

const AdminBlogUpload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const uploadImageToCloudinary = async () => {
    if (!image) return null;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      setLoading(true);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      setLoading(false);
      return res.data.secure_url;
    } catch (error) {
      setLoading(false);
      console.error("Cloudinary upload error:", error);
      throw new Error("Upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !image) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      const uploadedImageUrl = await uploadImageToCloudinary();

      const blogData = {
        title,
        description: content,
        imagePath: uploadedImageUrl,
        category: category || "General",
        author: author || "Admin",
        createdAt: new Date(),
      };

      // Firestore me save
      await addDoc(collection(db, "blogs"), blogData);

      alert("Blog uploaded successfully ✅");

      // Reset
      setTitle("");
      setContent("");
      setImage(null);
      setImageUrl("");
      setCategory("");
      setAuthor("");
    } catch (err) {
      console.error("Blog upload failed:", err);
      alert("Blog upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Blog Upload</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            rows="5"
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          ></textarea>
          <input type="file" onChange={handleImageChange} required />
          {imageUrl && <img src={imageUrl} alt="preview" className="w-full h-48 object-cover my-2 rounded" />}
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Publish Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminBlogUpload;

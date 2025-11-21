import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="py-12 bg-gray-100" id="bolgs1">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Blogs</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
            >
              {post.imagePath && (
                <img
                  src={post.imagePath}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {post.description.length > 150 
                    ? `${post.description.substring(0, 150)}...` 
                    : post.description}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

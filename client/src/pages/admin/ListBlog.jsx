import React, { useEffect, useState } from 'react';
import { blog_data } from '../../components/assets/assets';
import BlogTableItem from './BlogTableItem';

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 min-h-screen">
      
      {/* Inner container for spacing */}
      <div className="px-5 sm:px-16 pt-5 sm:pt-12">
        <h1 className="text-xl font-semibold text-gray-700">All Blogs</h1>

        {/* Table container */}
        <div className="relative mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">#</th>
                <th scope="col" className="px-2 py-4">Blog Title</th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">Date</th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">Status</th>
                <th scope="col" className="px-2 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ListBlog;

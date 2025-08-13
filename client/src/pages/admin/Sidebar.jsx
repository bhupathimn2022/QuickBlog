import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../components/assets/assets";

const Sidebar = () => {
  return (
    <div className="w-56 bg-gray-50 border-r border-gray-200 p-4">
      <nav className="flex flex-col gap-4">
        
        {/* Dashboard */}
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded
            ${isActive ? "bg-gray-300 font-semibold" : ""}
            hover:bg-gray-200`
          }
        >
          <img src={assets.home_icon} alt="" className="w-5 min-w-4" />
          <p className="hidden md:inline-block">Dashboard</p>
        </NavLink>

        {/* Add Blogs */}
        <NavLink
          to="/admin/addBlog"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded
            ${isActive ? "bg-gray-300 font-semibold" : ""}
            hover:bg-gray-200`
          }
        >
          <img src={assets.add_icon} alt="" className="w-5 min-w-4" />
          <p className="hidden md:inline-block">Add Blogs</p>
        </NavLink>

        {/* Blog Lists */}
        <NavLink
          to="/admin/listBlog"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded
            ${isActive ? "bg-gray-300 font-semibold" : ""}
            hover:bg-gray-200`
          }
        >
          <img src={assets.list_icon} alt="" className="w-5 min-w-4" />
          <p className="hidden md:inline-block">Blog Lists</p>
        </NavLink>

        {/* Comments */}
        <NavLink
          to="/admin/comments"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded
            ${isActive ? "bg-gray-300 font-semibold" : ""}
            hover:bg-gray-200`
          }
        >
          <img src={assets.comment_icon} alt="" className="w-5 min-w-4" />
          <p className="hidden md:inline-block">Comments</p>
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;

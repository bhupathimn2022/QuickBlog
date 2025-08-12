
// import React, { useState } from 'react'
// import { blogCategories } from '../assets/assets'

// const BlogList = () => {
//   const [menu, setMenu] = useState("All")

//   return (
//     <div>
//       <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
//         {blogCategories.map((item) => (
//           <div key={item} className='relative'>
//             <button
//               onClick={() => setMenu(item)}
//               className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}
//             >
//               {item}
//               {menu === item && (
//                 <div className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'></div>
//               )}
//             </button>
//           </div>
//         ))}
//       </div>
//       <div>
//         {/* --- blog cards --- */}
//       </div>
//     </div>
//   )
// }

// export default BlogList
import React, { useState } from 'react'
import { blog_data,blogCategories } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import BlogCard from './BlogCard'

const BlogList = () => {
  const [menu, setMenu] = useState("All")

  return (
    <div>
      {/* Category Buttons */}
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`relative cursor-pointer text-gray-500 transition-colors duration-300 ${
                menu === item && 'text-white px-4 pt-0.5'
              }`}
            >
              {item}

              <AnimatePresence>
                {menu === item && (
                  <motion.div
                    layoutId="highlight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.5
                    }}
                    className="absolute left-0 right-0 top-0 h-7 bg-primary rounded-full -z-10"
                  />
                )}
              </AnimatePresence>
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards */}
      <div>
        {/* Add blog cards here */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
  {blog_data
    .filter((blog) => menu === "All" ? true : blog.category === menu)
    .map((blog) => (
      <BlogCard key={blog._id} blog={blog} />
    ))}
</div>


      </div>
    </div>
  )
}

export default BlogList

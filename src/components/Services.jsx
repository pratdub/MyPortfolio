import React from 'react'

function Services() {
  return (
    <div className='flex justify-center items-center flex-wrap gap-6 p-4 h-screen bg-gradient-to-r from-sky-500 to-indigo-500'>
    <div className="max-w-sm h-auto rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105 dark:bg-slate-800">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">Web Application Development</div>
        <p className='text-white'>Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design authoring, including standardised code and proprietary software user experience design and search engine</p>
      </div>
    </div>
  
    <div className="max-w-sm h-auto rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105 dark:bg-slate-800">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">Backend Development</div>
        <p className='text-white'>Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design authoring, including standardised code and proprietary software user experience design and search engine</p>
      </div>
    </div>
  </div>
  
  )
}

export default Services
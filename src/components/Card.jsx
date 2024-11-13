import React from 'react'

function Card({ imageUrl, title, githubUrl }) {
  return (
    <div>
  <div className="max-w-sm h-full rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105 backdrop-blur-sm filter grayscale group transition duration-300 ease-in-out hover:filter-none">
    <img
      className="w-full h-48 object-cover"
      src={imageUrl}
      alt={title}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-white">{title}</div>
    </div>
    <div className="px-6 pb-4">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline filter grayscale group-hover:filter-none transition duration-300 ease-in-out"
      >
        Demo
      </a>
    </div>
  </div>
</div>

  
  )
}

export default Card
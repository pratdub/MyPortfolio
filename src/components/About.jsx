import React, { useEffect, useRef } from 'react';


function About() {
  const divRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // Trigger when at least 50% of the div is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-show');
        } else {
          entry.target.classList.remove('animate-show');
        }
      });
    }, observerOptions);

    divRefs.current.forEach((div) => {
      if (div) {
        observer.observe(div);
      }
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) {
          observer.unobserve(div);
        }
      });
    };
  }, []);

  return (
    // Outer container with scroll snapping
    <div className="h-screen snap-y snap-mandatory overflow-scroll bg-cover bg-[url('./assets/itadori.jpg')]">
      {/* First Section */}
      <div
        ref={(el) => (divRefs.current[0] = el)}
        className="h-screen snap-start flex flex-col justify-center items-center p-10 font-bold text-white opacity-0 transition-opacity duration-700 transform translate-y-10 "
      >
        <p className="text-2xl  backdrop-blur-2xl shadow-2xl rounded-lg max-w-5xl w-full">
        A recent graduate as of October, and until recently, I was a Software Development Engineer intern at Curer. During my time there, I worked on resolving complex issues in both frontend and backend systems, enhancing functionality, and ensuring smooth, intuitive user experiences. My journey has been driven by a passion for solving challenging problems and creating impactful solutions for end users.</p>
      </div>

      {/* Second Section */}
      <div
        ref={(el) => (divRefs.current[1] = el)}
        className="h-screen snap-start flex flex-col justify-center items-center p-10 font-bold text-white opacity-0 transition-opacity duration-700 transform translate-y-10 "
      >
        <div className='backdrop-blur-2xl shadow-2xl rounded-lg max-w-5xl w-full'>
        <h2 className="text-4xl mb-4">
          Software Development Engineer | Curer | May 2024 - October 2024
        </h2>
        <p className="text-2xl">
          • Resolved critical bugs in the Node.js backend, Django ORM layer, and AngularJS frontend.<br />
          • Enhanced user experience by adding new functionality to the frontend.<br />
          • Developed new ORM schemas for additional functionality.<br />
          • Designed and implemented an end-to-end chatbot using an LLM model.<br />
          • Implemented logic to store and retrieve previous user conversations.<br />
          • Led the development and delivery of a health assistant solution.
        </p>
        </div>
      </div>

      {/* Third Section */}
      <div
        ref={(el) => (divRefs.current[2] = el)}
        className="h-screen snap-start flex flex-col justify-center items-center p-10 font-bold text-white opacity-0 transition-opacity duration-700 transform translate-y-10"
      >
        <div className='backdrop-blur-3xl shadow-2xl rounded-lg max-w-5xl w-full'>
        <h2 className="text-4xl mb-4">
          Side Project: Inventory Management System | Flask, PostgreSQL | 2024
        </h2>
        <p className="text-2xl">
          • Designed and developed a full-fledged web application using Flask for managing inventory.<br />
          • Implemented user authentication and authorization based on roles.<br />
          • Engineered and structured a relational database.<br />
          • Configured and optimized database performance.<br />
          • Built multiple sections for tracking raw materials, finished products, and inventory status.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;

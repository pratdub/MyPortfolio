import React from 'react';
import profileImage from './assets/home2.png'
import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <>
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-[url('./assets/itadori.jpg')] ">
    <figure className="flex max-w-5xl mx-auto backdrop-blur-sm rounded-xl p-8">
      <img
        className="rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover mr-8"
        src={profileImage}
        alt="Profile"
      />
      <div className="text-red-100 flex flex-col justify-center text-center md:text-left font-bold">
        <blockquote>
        <TypeAnimation
      sequence={[
        "I'm Prateek Dubey",
        1000,
        "I'm a Full-Stack Web Dveloper",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </blockquote>
        <figcaption className="font-medium mt-4">
          <div className="text-red-100 dark:text-red-100">Web Developer</div>
          <div className="text-white-700 dark:text-white-500">New Delhi, India</div>
        </figcaption>
      </div>
    </figure>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-4">
    <SocialIcon bgColor="red" network="github" url="https://github.com/pratdub" />
    <SocialIcon bgColor="red" network="linkedin" url="https://www.linkedin.com/in/prateek-dubey-892919298/" />
  </div>
  </div>
  </>

  );
}

export default App;

import React from "react";
import { Carousel } from "react-responsive-carousel";

const ModernProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Image Carousel */}
      <div className="relative h-80 overflow-hidden">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={600}
          swipeable={true}
          emulateTouch={true}
          showIndicators={true}
          className="project-carousel"
        >
          {project.images && project.images.length > 0 ? (
            project.images.map((image, index) => (
              <div key={index} className="h-80">
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <div className="h-80">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </Carousel>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Platform Buttons */}
        <div className="grid grid-cols-3 gap-3 pt-4">
          {project.webUrl && (
            <a
              href={project.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-bold">Web</span>
            </a>
          )}
          
          {project.iosUrl && (
            <a
              href={project.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-500/50"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-xs font-bold">iOS</span>
            </a>
          )}
          
          {project.androidUrl && (
            <a
              href={project.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
              </svg>
              <span className="text-xs font-bold">Android</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernProjectCard;


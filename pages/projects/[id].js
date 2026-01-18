import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import Link from "next/link";
import data from "../../data/portfolio.json";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState(0);

  const project = data.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/projects">
            <a className="text-purple-400 hover:text-purple-300">← Back to Projects</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black min-h-screen">
      <Head>
        <title>{project.title} - {data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header />

        {/* Back Button */}
        <div className="mt-10 px-4">
          <Link href="/projects">
            <a className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Projects</span>
            </a>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mt-10 px-4 max-w-7xl mx-auto">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-5xl tablet:text-6xl laptop:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.webUrl && (
              <a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v.878A2.002 2.002 0 0112.5 16H12v-1a1 1 0 011-1h1v-1a1 1 0 011-1v-1a1 1 0 011-1h.07a5.979 5.979 0 01-1.4 2.649A3.984 3.984 0 0110 12c-.932 0-1.798.318-2.487.853z" clipRule="evenodd" />
                </svg>
                <span>Visit Website</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {project.iosUrl && (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-2xl border border-gray-700 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>App Store</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-2xl border border-gray-700 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6,9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88,3.24a11.43,11.43,0,0,0-8.94,0L5.65,5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4,9.48A10.81,10.81,0,0,0,1,18H23A10.81,10.81,0,0,0,17.6,9.48ZM7,15.25A1.25,1.25,0,1,1,8.25,14,1.25,1.25,0,0,1,7,15.25Zm10,0A1.25,1.25,0,1,1,18.25,14,1.25,1.25,0,0,1,17,15.25Z"/>
                </svg>
                <span>Google Play</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="mb-16">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl mb-6 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={project.images[selectedImage]}
                  alt={`${project.title} screenshot ${selectedImage + 1}`}
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Thumbnail Gallery */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-5 gap-4">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                        selectedImage === index
                          ? "ring-4 ring-purple-500 scale-105"
                          : "ring-2 ring-gray-700 hover:ring-purple-400 hover:scale-105"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-purple-500/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Technologies Used */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">Technologies Used</h2>
            <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 gap-4">
              {project.tags.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {tech.charAt(0)}
                    </div>
                    <p className="text-white font-medium">{tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Project */}
          <div className="mt-24 pt-12 border-t border-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">Explore More Projects</h2>
            </div>
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-6">
              {data.projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((nextProject) => (
                  <Link href={`/projects/${nextProject.id}`} key={nextProject.id}>
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={nextProject.imageSrc}
                            alt={nextProject.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                            {nextProject.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2">
                            {nextProject.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

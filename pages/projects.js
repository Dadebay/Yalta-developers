import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import data from "../data/portfolio.json";

export default function Projects() {
  const workRef = useRef();
  const aboutRef = useRef();
  const teamRef = useRef();

  const handleWorkScroll = () => {
    window.scrollTo({ top: workRef.current.offsetTop, left: 0, behavior: "smooth" });
  };

  const handleAboutScroll = () => {
    window.scrollTo({ top: aboutRef.current.offsetTop, left: 0, behavior: "smooth" });
  };

  const handleTeamScroll = () => {
    window.scrollTo({ top: teamRef.current.offsetTop, left: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-black min-h-screen">
      <Head>
        <title>Our Projects - {data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleTeamScroll={handleTeamScroll}
        />

        {/* Hero Section */}
        <div className="mt-20 laptop:mt-32 px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">
                🚀 Our Portfolio
              </span>
            </div>
            <h1 className="text-5xl tablet:text-6xl laptop:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl tablet:text-2xl text-gray-400 max-w-3xl mx-auto">
              Explore our portfolio of innovative digital solutions that helped businesses transform and grow
            </p>
          </div>

          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 laptop:grid-cols-2 gap-8 mt-20">
            {data.projects.map((project, index) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
                    
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Project Number */}
                      <div className="absolute top-6 right-6 z-20">
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">0{index + 1}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="absolute bottom-6 left-6 right-6 z-20">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-medium text-white"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-lg text-xs font-medium text-purple-300">
                              +{project.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-6 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Platform Indicators */}
                      <div className="flex items-center gap-4 mb-6">
                        {project.webUrl && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v.878A2.002 2.002 0 0112.5 16H12v-1a1 1 0 011-1h1v-1a1 1 0 011-1v-1a1 1 0 011-1h.07a5.979 5.979 0 01-1.4 2.649A3.984 3.984 0 0110 12c-.932 0-1.798.318-2.487.853z" clipRule="evenodd" />
                            </svg>
                            <span>Web</span>
                          </div>
                        )}
                        {project.iosUrl && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <span>iOS</span>
                          </div>
                        )}
                        {project.androidUrl && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.6,9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88,3.24a11.43,11.43,0,0,0-8.94,0L5.65,5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4,9.48A10.81,10.81,0,0,0,1,18H23A10.81,10.81,0,0,0,17.6,9.48ZM7,15.25A1.25,1.25,0,1,1,8.25,14,1.25,1.25,0,0,1,7,15.25Zm10,0A1.25,1.25,0,1,1,18.25,14,1.25,1.25,0,0,1,17,15.25Z"/>
                            </svg>
                            <span>Android</span>
                          </div>
                        )}
                      </div>

                      {/* View Project Button */}
                      <div className="flex items-center gap-2 text-purple-400 font-medium group-hover:gap-4 transition-all duration-300">
                        <span>View Project Details</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-purple-900/30 border border-purple-500/30">
              <h2 className="text-4xl laptop:text-5xl font-bold mb-6 text-white">
                Have a Project in Mind?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let&apos;s build something amazing together. Get in touch with us today!
              </p>
              <a
                href="mailto:info@yourcompany.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start Your Project
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

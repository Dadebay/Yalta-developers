import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import TeamCard from "../components/TeamCard";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const teamRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleTeamScroll = () => {
    window.scrollTo({
      top: teamRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} bg-black dark transition-colors duration-300`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleTeamScroll={handleTeamScroll}
        />
        {/* Hero Section with Circular Logo */}
        <div className="laptop:mt-20 mt-10 flex flex-col items-center justify-center min-h-[75vh] px-4">
          {/* Circular Logo */}
          <div className="circular-logo-container mb-8">
            <div className="circular-logo transform hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50">
              <img src="/images/logo.svg" alt="Yalta Developers Logo" />
            </div>
          </div>

          {/* Company Name */}
          <h1 className="text-5xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Yalta Developers
          </h1>

          {/* Services We Offer */}
          <div className="mt-6 text-center max-w-4xl">
            <p className="text-lg tablet:text-xl laptop:text-2xl text-gray-300 leading-relaxed">
              Web Development • Mobile Applications • Backend Systems • Admin Panels • UI/UX Design • Cloud Solutions
            </p>
          </div>

          {/* Subtitle */}
          <div className="mt-6 text-center">
            <p className="text-base tablet:text-lg laptop:text-xl text-gray-500">
              Transforming ideas into powerful digital experiences
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 text-white opacity-70"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Scrolling Projects Names - Moved before What We Do */}
        <div className="mt-16 laptop:mt-20 py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-10"></div>
          <div className="scrolling-projects">
            <div className="scrolling-projects-content">
              {[...data.projects, ...data.projects, ...data.projects].map((project, index) => (
                <div key={`${project.id}-${index}`} className="scrolling-project-item">
                  {project.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Do Section - Expanded with all services */}
        <div className="mt-32 laptop:mt-48 px-4 laptop:px-0">
          <div className="text-center mb-20">
            <h2 className="text-5xl tablet:text-6xl laptop:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl tablet:text-2xl text-gray-400 max-w-4xl mx-auto">
              We specialize in creating cutting-edge digital solutions that transform businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Web Development */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Web Development</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  Modern, responsive websites with cutting-edge technologies. From landing pages to complex enterprise applications.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">→</span> React & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">→</span> Progressive Web Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">→</span> E-commerce Solutions
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-pink-500 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Mobile Apps</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  Native and cross-platform mobile applications that deliver exceptional user experiences.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">→</span> React Native
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">→</span> Flutter Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">→</span> Native iOS & Android
                  </li>
                </ul>
              </div>
            </div>

            {/* Backend & Cloud */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Backend & Cloud</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  Scalable backend systems, APIs, and cloud infrastructure.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">→</span> Node.js & Python
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">→</span> AWS & Azure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">→</span> Database Design
                  </li>
                </ul>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-green-500 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">UI/UX Design</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  User-centered design that creates intuitive interfaces.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">→</span> User Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">→</span> Wireframing & Prototyping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">→</span> Design Systems
                  </li>
                </ul>
              </div>
            </div>

            {/* Admin Panels */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Admin Systems</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  Powerful admin dashboards and content management systems.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">→</span> Custom CMS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">→</span> Analytics Dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400">→</span> User Management
                  </li>
                </ul>
              </div>
            </div>

            {/* DevOps & CI/CD */}
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-orange-500 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">DevOps & CI/CD</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  Automated deployment pipelines and infrastructure management.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span> Docker & Kubernetes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span> CI/CD Pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span> Monitoring & Logging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Projects Section with Parallax */}
        <div className="mt-32 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-5xl tablet:text-6xl laptop:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Our Projects 🚀
          </h1>
          <p className="text-lg tablet:text-xl text-gray-400 mb-16 max-w-3xl mx-auto text-center">
            Showcasing our best work across web, mobile, and cutting-edge technologies.
          </p>

          <div className="mt-16 max-w-7xl mx-auto space-y-32">
            {data.projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'laptop:flex-row' : 'laptop:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Project Image with Parallax */}
                <div className="w-full laptop:w-1/2 relative group">
                  <div className="parallax-image-container overflow-hidden rounded-3xl border-2 border-gray-800 group-hover:border-purple-500 transition-all duration-500 shadow-2xl group-hover:shadow-purple-500/30">
                    <div className="parallax-image-wrapper">
                      <img 
                        src={project.imageSrc || `https://via.placeholder.com/800x600/1a1a1a/8b5cf6?text=${encodeURIComponent(project.title)}`}
                        alt={project.title}
                        className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                    #{index + 1}
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full laptop:w-1/2 space-y-6">
                  <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm font-semibold border border-purple-500/30">
                    {project.tags?.[0] || 'Featured Project'}
                  </div>
                  <h3 className="text-4xl tablet:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 text-sm border border-gray-700 hover:border-purple-500 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={project.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                    >
                      View Project
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section - Ultra Modern Floating Cards */}
        <div className="mt-32 laptop:mt-48 p-2 laptop:p-0 overflow-hidden">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">
                ✨ Success Stories
              </span>
            </div>
            <h2 className="text-5xl tablet:text-6xl laptop:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real feedback from real clients who transformed their business with us
            </p>
          </div>

          {/* Floating Cards Grid with 3D Perspective */}
          <div className="max-w-7xl mx-auto perspective-1000">
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
              
              {/* Testimonial Card 1 - Featured Large */}
              <div className="laptop:col-span-2 group relative preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse-slow"></div>
                <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 p-10 rounded-3xl border border-purple-500/30 backdrop-blur-xl hover:border-purple-400 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(168,85,247,0.4)]">
                  
                  {/* Quote Icon */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="flex flex-col laptop:flex-row gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">5.0</span>
                      </div>
                      
                      <p className="text-xl laptop:text-2xl text-gray-100 leading-relaxed mb-6 font-light">
                        "We've been working with Yalta Developers for a few years now. They've allowed us to add top tier front-end skills to our team at a very reasonable price. They've done an excellent job rebuilding our public website and now they're redoing our backend dashboard."
                      </p>

                      <div className="flex items-center gap-2 text-sm text-purple-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>3+ years partnership</span>
                      </div>
                    </div>

                    {/* Author Card */}
                    <div className="flex laptop:flex-col items-center laptop:items-start gap-4 pt-6 laptop:pt-0 border-t laptop:border-t-0 laptop:border-l border-gray-800 laptop:pl-8">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl ring-4 ring-purple-500/20">
                          <span className="text-3xl font-bold text-white">JS</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-lg border-4 border-gray-900 animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">John Sherwood</h4>
                        <p className="text-gray-400 text-sm mb-3">Co-founder & Former CTO</p>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 px-3 py-1.5 rounded-lg">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-purple-300">Gleam</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="group relative preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-gray-900 via-pink-900/20 to-gray-900 p-8 rounded-3xl border border-pink-500/30 backdrop-blur-xl hover:border-pink-400 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(236,72,153,0.4)] h-full flex flex-col">
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl backdrop-blur-sm flex items-center justify-center border border-pink-500/30">
                      <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-lg text-gray-200 leading-relaxed mb-6 flex-grow">
                    "We are a very international team in a company based in Germany. We hired Yalta Developers to re-create our web shop in an app and were pleasantly surprised, not only by the result, but also by the flexibility, sympathy and enthusiasm shown during the development period."
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl ring-4 ring-blue-500/20">
                      <span className="text-xl font-bold text-white">MB</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">Miguel Blaufuks</h4>
                      <p className="text-gray-400 text-sm">Founder & CEO</p>
                    </div>
                    <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 border border-pink-500/30 px-3 py-1.5 rounded-lg">
                      <span className="text-sm font-medium text-pink-300">SmMarket</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="group relative preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 p-8 rounded-3xl border border-blue-500/30 backdrop-blur-xl hover:border-blue-400 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(59,130,246,0.4)] h-full flex flex-col">
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-lg text-gray-200 leading-relaxed mb-6 flex-grow">
                    "With Yalta Developers, we improved our development time, documentation, and customer satisfaction. Their transparent and effective communication impressed us. It is not an overstatement, they are the best."
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-xl ring-4 ring-green-500/20">
                      <span className="text-xl font-bold text-white">AO</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">Alex Osterman</h4>
                      <p className="text-gray-400 text-sm">Former UX Design Manager</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 px-3 py-1.5 rounded-lg">
                      <span className="text-sm font-medium text-blue-300">Maritz</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Stats Bar */}
            <div className="mt-16 grid grid-cols-2 laptop:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/20">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">100+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-transparent border border-blue-500/20">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">5.0</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-transparent border border-pink-500/20">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text mb-2">200+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-900/30 to-transparent border border-green-500/20">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text mb-2">98%</div>
                <div className="text-sm text-gray-400">Client Retention</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - Modern Design */}
        <div className="mt-32 laptop:mt-48 p-4 laptop:p-0" ref={teamRef}>
          <div className="text-center mb-20">
            <h1 className="text-5xl tablet:text-6xl laptop:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl tablet:text-2xl text-gray-400 max-w-3xl mx-auto">
              The talented minds behind our innovative solutions
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
            {data.team && data.team.map((member, index) => (
              <div 
                key={member.id}
                className="group relative bg-gradient-to-br from-gray-900/90 to-black p-8 rounded-3xl border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="mb-6 relative">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-purple-500 transition-all duration-500 shadow-xl">
                      <img 
                        src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=8b5cf6&color=fff&bold=true`}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-1/2 translate-x-16 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  {/* Description */}
                  {member.description && (
                    <p className="text-gray-400 text-center text-sm leading-relaxed mb-6">
                      {member.description}
                    </p>
                  )}

                  {/* Social Links with Icons */}
                  <div className="flex justify-center gap-3 pt-4 border-t border-gray-800">
                    {/* GitHub */}
                    <a
                      href={member.socials?.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50 group"
                      title="GitHub"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={member.socials?.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 group"
                      title="LinkedIn"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href={member.socials?.instagram || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 group"
                      title="Instagram"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* Telegram */}
                    <a
                      href={member.socials?.telegram || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 group"
                      title="Telegram"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>

                    {/* Twitter/X */}
                    <a
                      href={member.socials?.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50 group"
                      title="Twitter"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Member number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl transform group-hover:rotate-12 transition-transform duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        {/* Contact Section - Clean & Modern */}
        <div id="contact" className="mt-32 laptop:mt-48 p-4 laptop:p-0 mb-20">
          <div className="max-w-7xl mx-auto">
            {/* Header with Logo Animation */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="circular-logo-container relative">
                  <div className="circular-logo heartbeat-animation">
                    <img src="/images/logo.svg" alt="Logo" />
                  </div>
                </div>
              </div>
              <h2 className="text-5xl tablet:text-6xl laptop:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
            </div>

            {/* Contact Grid - No descriptive text */}
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8 mb-16">
              {/* Email Card */}
              <div className="group bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📧</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Email</h3>
                <a 
                  href="mailto:info@yaltadevelopers.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium break-all"
                >
                  info@yaltadevelopers.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="group bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-green-500 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Phone</h3>
                <a 
                  href="tel:+99312345678" 
                  className="text-green-400 hover:text-green-300 transition-colors text-lg font-medium"
                >
                  +993 12 34 56 78
                </a>
              </div>

              {/* Location Card */}
              <div className="group bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-3xl border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📍</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Location</h3>
                <p className="text-purple-400 text-lg font-medium">
                  Ashgabat, Turkmenistan
                </p>
              </div>
            </div>

            {/* Social Links - No title */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-12 rounded-3xl border border-gray-800 mb-12">
              <div className="flex justify-center gap-6 flex-wrap">
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 hover:bg-blue-600 p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 hover:bg-gray-700 p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 hover:bg-blue-400 p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => window.open("mailto:info@yaltadevelopers.com")}
                className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold px-12 py-5 rounded-2xl text-xl hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Schedule a Call
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

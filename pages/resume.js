import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center px-4">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-gradient-to-br from-gray-900 to-black border border-gray-800" : "bg-gray-50"
              } max-w-5xl p-12 mob:p-6 desktop:p-16 rounded-2xl shadow-2xl`}
            >
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                  Yalta Developers
                </h1>
                <h2 className="text-2xl font-semibold text-gray-300 mb-4">{resume.tagline}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {resume.description}
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-white">Technical Skills</h3>
                
                <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
                  {/* Languages */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {resume.languages.map((lang, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-xl font-semibold mb-4 text-pink-400">Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {resume.frameworks.map((framework, index) => (
                        <span key={index} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Tools & Others</h4>
                    <div className="flex flex-wrap gap-2">
                      {resume.others.map((tool, index) => (
                        <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-white">Experience</h3>
                <div className="space-y-6">
                  {resume.experiences.map(
                    ({ id, dates, type, position, bullets }) => (
                      <div key={id} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-semibold text-white">{position}</h4>
                          <span className="text-sm text-gray-400">{dates}</span>
                        </div>
                        <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs mb-3">
                          {type}
                        </span>
                        <p className="text-gray-300 leading-relaxed">{bullets}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 text-white">Education</h3>
                <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {resume.education.universityName}
                  </h4>
                  <p className="text-gray-400 mb-3">
                    {resume.education.universityDate}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="text-center pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
                <button
                  onClick={() => window.open("mailto:info@yaltadevelopers.com")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;

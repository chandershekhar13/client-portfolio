"use client";

import { motion } from "framer-motion";

export default function BioAbout() {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="bio"
      className="bg-black text-white py-24 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-white/5 relative"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-900/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-indigo-500"></div>

            <h2 className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Behind The Rhythm
            </h2>
          </div>

          <h3 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-white">
            A Life In Beats.
          </h3>
        </motion.div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.18 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {/* FOUNDATION (Updated Text) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-14 flex flex-col justify-center relative overflow-hidden group hover:bg-zinc-900 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.18)] transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-indigo-500"></div>

                <h4 className="font-oswald text-indigo-400 uppercase tracking-[0.3em] text-xs">
                  The Foundation
                </h4>
              </div>

              <p className="text-white text-3xl md:text-5xl font-oswald uppercase leading-[0.95] tracking-tight max-w-4xl">
                A Journey That Began
                <span className="text-indigo-500"> Inside A Church </span>
                At The Age Of 6.
              </p>

              <div className="mt-10 max-w-3xl flex flex-col gap-5">
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                  Rooted deeply in the traditional Guru–Shishya Parampara, the journey began long before the drum kit. Mark was initiated into Indian Classical music through the Tabla under Guru Rajneesh Dhiman Ji—a disciple of Guru Rupram Dhiman Ji—and later received advanced guidance from senior guru Pt. Biplab Bhattacharya Ji.
                </p>

                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                  This phase was an education in how to truly live as a student of music. The training forged an unbreakable foundation in <span className="text-gray-300 italic">adaab</span> (ethics and respect), the mental endurance required for structured, meaningful <span className="text-gray-300 italic">riyaaz</span> (practice), and the ability to internalize rhythm both with and without an instrument.
                </p>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-2">
                  Ultimately, these early years shaped the mindset, character, and deep sense of responsibility required to carry traditional musicality into modern expression.
                </p>
              </div>
            </div>
          </motion.div>

          {/* PERFECT SCORE */}
          <motion.div
            variants={cardVariants}
            className="bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:bg-zinc-900 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.18)] transition-all duration-700 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10">
              <h4 className="font-oswald text-gray-500 uppercase tracking-[0.3em] text-xs mb-8">
                Trinity College London
              </h4>

              <div className="flex items-end leading-none">
                <span className="font-oswald text-[7rem] md:text-[8rem] tracking-tighter text-white">
                  100
                </span>

                <span className="text-indigo-500 text-3xl mb-4">
                  /100
                </span>
              </div>

              <p className="text-white uppercase tracking-[0.25em] text-[10px] md:text-xs mt-4">
                Grade 8 Drums Examination
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mt-6 max-w-xs">
                A reflection of years spent refining discipline,
                precision, and musicality through relentless riyaaz.
              </p>
            </div>

            <motion.div
              animate={{
                rotate: [0, 4, -4, 0],
                scale: [1, 1.04, 1]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-20 -right-10 text-[16rem] font-oswald text-white/[0.02]"
            >
              8
            </motion.div>
          </motion.div>

          {/* JOURNEY THROUGH MASTERS */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-3 bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-14 relative overflow-hidden group hover:bg-zinc-900 hover:border-indigo-500/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.18)] transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[1px] bg-indigo-500"></div>

                <h4 className="font-oswald text-indigo-400 uppercase tracking-[0.3em] text-xs">
                  Journey Through Masters
                </h4>
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                {/* LEFT */}
                <div>
                  <h3 className="font-oswald text-4xl md:text-5xl uppercase leading-none text-white mb-8">
                    Classical
                    <br />
                    Roots.
                  </h3>

                  <div className="space-y-8 border-l border-white/5 pl-6">
                    <div>
                      <h5 className="text-white text-xl">
                        Guru Rajneesh Dhiman Ji
                      </h5>

                      <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mt-2">
                        Guru–Shishya Parampara
                      </p>
                    </div>

                    <div>
                      <h5 className="text-white text-xl">
                        Pt. Biplab Bhattacharya Ji
                      </h5>

                      <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mt-2">
                        Senior Classical Guidance
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mt-10 max-w-lg">
                    The training was never only about performance.
                    It was about discipline, character, respect,
                    and understanding music beyond the instrument.
                  </p>
                </div>

                {/* RIGHT */}
                <div>
                  <h3 className="font-oswald text-4xl md:text-5xl uppercase leading-none text-indigo-400 mb-8">
                    Modern
                    <br />
                    Expansion.
                  </h3>

                  <div className="space-y-8 border-l border-indigo-500/20 pl-6">
                    <div>
                      <h5 className="text-white text-xl">Daio</h5>

                      <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mt-2">
                        African Rhythmic Studies
                      </p>
                    </div>

                    <div>
                      <h5 className="text-white text-xl">
                        Guru Vishal Mehta Ji
                      </h5>

                      <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mt-2">
                        Disciple of Pt. Suresh Talwalkar Ji
                      </p>
                    </div>

                    <div>
                      <h5 className="text-white text-xl">
                        Gino Banks
                      </h5>

                      <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mt-2">
                        Mumbai
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mt-10 max-w-lg">
                    Global influences from Jojo Mayer, Benny Greb,
                    Chris Coleman, J. Schott, and modern rhythmic systems
                    shaped a hybrid musical language where Indian rhythmic
                    intelligence meets modern drum expression.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CURRENT ERA */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-3 bg-gradient-to-br from-indigo-950/30 to-black border border-indigo-500/20 rounded-[2rem] p-8 md:p-14 relative overflow-hidden group hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.25)] transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-14">
              <div>
                <h4 className="font-oswald text-indigo-400 uppercase tracking-[0.3em] text-xs mb-8">
                  Current Era
                </h4>

                <h3 className="font-oswald text-5xl md:text-7xl uppercase leading-none tracking-tight text-white">
                  Educator.
                  <br />
                  Founder.
                  <br />
                  Performer.
                </h3>

                <div className="flex items-center gap-10 mt-10">
                  <div>
                    <div className="font-oswald text-5xl text-white">
                      12+
                    </div>

                    <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mt-2">
                      Years Teaching
                    </p>
                  </div>

                  <div className="w-[1px] h-12 bg-white/10"></div>

                  <div>
                    <div className="font-oswald text-5xl text-white">
                      15+
                    </div>

                    <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mt-2">
                      Years Live
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 max-w-xl">
                <div className="border-l border-indigo-500/20 pl-5">
                  <h5 className="text-white text-xl">
                    Mark School of Drums
                  </h5>

                  <p className="text-indigo-400/70 uppercase tracking-[0.2em] text-[10px] mt-2">
                    Founder & Educator
                  </p>
                </div>

                <div className="border-l border-indigo-500/20 pl-5">
                  <h5 className="text-white text-xl">
                    Pitch & Pulse School of Music
                  </h5>

                  <p className="text-indigo-400/70 uppercase tracking-[0.2em] text-[10px] mt-2">
                    Co-Founder
                  </p>
                </div>

                <div className="border-l border-indigo-500/20 pl-5">
                  <h5 className="text-white text-xl">
                    Shed Fest — Chandigarh
                  </h5>

                  <p className="text-indigo-400/70 uppercase tracking-[0.2em] text-[10px] mt-2">
                    Founder
                  </p>
                </div>

                <div className="border-l border-indigo-500/20 pl-5">
                  <h5 className="text-white text-xl">
                    DAV College
                  </h5>

                  <p className="text-indigo-400/70 uppercase tracking-[0.2em] text-[10px] mt-2">
                    Tabla Instructor
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PHILOSOPHY */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-3 py-16 text-center"
          >
            <p className="text-gray-500 uppercase tracking-[0.35em] text-[10px] md:text-xs mb-8">
              Philosophy
            </p>

            <h3 className="font-oswald text-4xl md:text-7xl uppercase leading-[0.95] tracking-tight text-white max-w-6xl mx-auto">
              Music Is Not Learned.
              <br />

              <span className="text-indigo-500">
                It Is Lived.
              </span>
            </h3>

            <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-3xl mx-auto mt-10 font-light">
              The goal is not just to create drummers.
              It is to create musicians capable of emotional impact,
              clarity, depth, and truthful expression.
            </p>

            <div className="mt-16">
              <p className="text-gray-500 italic text-lg md:text-2xl leading-relaxed">
                “Technique can impress.
                <br />
                But true music leaves an impact.”
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

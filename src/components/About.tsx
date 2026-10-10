'use client';

import React, { useState } from 'react';
import { portfolioConfig } from '@/data/portfolioConfig';
import { Code, LineChart, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'vbuilt' | 'stack'>('philosophy');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight text-balance">
            {portfolioConfig.about.heading}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-balance">
            {portfolioConfig.about.subheading}
          </p>
        </div>

        {/* Narrative & Core Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Biography Narrative & Interactive Tabs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0d1527]/70 border border-white/10 shadow-xl backdrop-blur-sm">
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {portfolioConfig.about.narrativeParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Interactive Tabs for deeper exploration */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4 p-1 bg-black/40 rounded-xl w-fit border border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveTab('philosophy')}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === 'philosophy'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Engineering Principles
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('vbuilt')}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === 'vbuilt'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    VBUILT SOLUTIONS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('stack')}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === 'stack'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Continuous Growth
                  </button>
                </div>

                {activeTab === 'philosophy' && (
                  <div className="text-sm text-slate-300 space-y-2">
                    <p className="font-medium text-white">Pragmatic, resilient, and clear:</p>
                    <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                      <li>Prioritize maintainability and clean structure over excessive tooling.</li>
                      <li>Bridge computational data analysis with clear, responsive frontend interfaces.</li>
                      <li>Build user experiences that respond instantly with zero dead ends.</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'vbuilt' && (
                  <div className="text-sm text-slate-300 space-y-2">
                    <p className="font-medium text-white">{portfolioConfig.about.vbuiltSolutions.name}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {portfolioConfig.about.vbuiltSolutions.description}
                    </p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="text-sm text-slate-300 space-y-2">
                    <p className="font-medium text-white">Always exploring the frontier:</p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Deepening expertise across statistical data science in Python, machine learning workflows, and high-performance React architectures.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* VBUILT SOLUTIONS Showcase Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0d1527] to-[#121c35] border border-cyan-500/20 shadow-xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-semibold text-cyan-400 tracking-wider uppercase">
                    Our Buildmark
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">
                    {portfolioConfig.about.vbuiltSolutions.name}
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Digital Craft & Standards
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {portfolioConfig.about.vbuiltSolutions.motto}
              </p>
              <div className="text-xs text-slate-400 flex items-center gap-4">
                <span>Clean Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Data-Driven Precision</span>
                <span aria-hidden="true">·</span>
                <span>User-First Design</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Core Areas */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual asset */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1527] shadow-xl">
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-900">
                {!imageError ? (
                  <img
                    src={portfolioConfig.about.vbuiltSolutions.image}
                    alt="VBUILT SOLUTIONS Architecture"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                ) : null}

                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1527] to-[#141e34] text-center">
                    <Cpu className="w-10 h-10 text-cyan-400 mb-2" />
                    <span className="text-sm font-semibold text-white">VBUILT SOLUTIONS</span>
                    <span className="text-xs text-slate-400 mt-1">Engineering Excellence</span>
                  </div>
                )}
              </div>
            </div>

            {/* Core Interests List */}
            <div className="p-6 rounded-2xl bg-[#0d1527]/50 border border-white/10 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Core Domains of Interest
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {portfolioConfig.about.coreInterests.map((interest, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-colors flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">{interest.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{interest.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

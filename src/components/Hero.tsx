'use client';

import React, { useState } from 'react';
import { portfolioConfig } from '@/data/portfolioConfig';
import { ArrowRight, ExternalLink, Terminal, Sparkles, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status label if enabled */}
            {portfolioConfig.personal.statusLabelEnabled && (
              <div className="inline-flex items-center gap-2 mb-6 text-xs text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>{portfolioConfig.personal.statusLabel}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">{portfolioConfig.personal.location}</span>
              </div>
            )}

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 text-balance">
              {portfolioConfig.hero.greeting}
            </h1>

            {/* Main Statement */}
            <p className="text-xl sm:text-2xl text-slate-200 font-medium tracking-tight mb-4 leading-snug text-balance">
              {portfolioConfig.hero.mainStatement}
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              {portfolioConfig.hero.supportingText}
            </p>

            {/* Actions & Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => handleScroll(portfolioConfig.hero.primaryCtaHref)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-[0_0_24px_rgba(56,189,248,0.25)] hover:shadow-[0_0_32px_rgba(56,189,248,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{portfolioConfig.hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => handleScroll(portfolioConfig.hero.secondaryCtaHref)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{portfolioConfig.hero.secondaryCtaText}</span>
              </button>
            </div>

            {/* Prominent Social Profiles Strip */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-xs text-slate-400">
              <span className="font-medium text-slate-300">Profiles:</span>
              <a
                href={portfolioConfig.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={portfolioConfig.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-400 border border-white/10 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Visual & Developer Card */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#0d1527]/80 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30">
              {/* Visual Container */}
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-900">
                {!imageError ? (
                  <img
                    src={portfolioConfig.hero.heroImage}
                    alt="Vignesh Poojary Developer Environment"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                ) : null}

                {/* Styled CSS/SVG Fallback if image not yet loaded or error */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1527] to-[#141e34] text-center">
                    <Terminal className="w-10 h-10 text-cyan-400 mb-3" />
                    <span className="text-sm font-semibold text-white">Vignesh Poojary</span>
                    <span className="text-xs text-slate-400 mt-1">Python & Full-Stack Web Development</span>
                  </div>
                )}

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent opacity-80" />
              </div>

              {/* Developer Environment Card Content */}
              <div className="p-5 border-t border-white/5">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="font-semibold text-slate-200">Active Focus</span>
                  </div>
                  <span>Next.js · Python</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Exploring predictive modeling, student performance analytics, and clean full-stack web applications.
                </p>
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-cyan-400">{portfolioConfig.personal.buildmark}</span>
                  <span>Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Highlight Proof Strip Below Hero Split */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Specialization</span>
            <span className="text-base font-bold text-white mt-1">Python & Analytics</span>
            <span className="text-xs text-slate-400 mt-0.5">Pandas, NumPy, ML</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Web Engineering</span>
            <span className="text-base font-bold text-white mt-1">Next.js & React</span>
            <span className="text-xs text-slate-400 mt-0.5">TypeScript, Tailwind</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Live Project</span>
            <a
              href="https://studentperformance-two.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-base font-bold text-cyan-400 hover:text-cyan-300 mt-1 inline-flex items-center gap-1 group"
            >
              <span>Student Performance</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <span className="text-xs text-slate-400 mt-0.5">Vercel Deployed</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Standard</span>
            <span className="text-base font-bold text-white mt-1">VBUILT SOLUTIONS</span>
            <span className="text-xs text-slate-400 mt-0.5">Purposeful Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}

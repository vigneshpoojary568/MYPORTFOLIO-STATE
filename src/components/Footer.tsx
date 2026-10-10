'use client';

import React from 'react';
import { portfolioConfig } from '@/data/portfolioConfig';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060a14] py-14 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-base font-bold text-white tracking-tight">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{portfolioConfig.personal.name}</span>
            </div>
            <p className="text-slate-400 mt-1 max-w-sm">
              {portfolioConfig.personal.title} · {portfolioConfig.personal.buildmark}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioConfig.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-cyan-400 bg-white/5 rounded-lg transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              aria-label="Email Me"
              className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 text-slate-400 hover:text-cyan-400 bg-white/5 rounded-lg transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {new Date().getFullYear()} {portfolioConfig.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Built with Next.js & TypeScript</span>
            <span aria-hidden="true">·</span>
            <span>{portfolioConfig.personal.buildmark}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

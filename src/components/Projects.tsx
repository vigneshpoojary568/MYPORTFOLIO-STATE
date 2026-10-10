'use client';

import React, { useState } from 'react';
import { portfolioConfig, Project } from '@/data/portfolioConfig';
import { ExternalLink, ArrowUpRight, X, CheckCircle2, Plus, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative bg-[#070c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Featured Projects & Applications
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed text-balance">
            Real-world software engineering, predictive data platforms, and responsive web applications built with modern tools.
          </p>
        </div>

        {/* Featured Hero Project Card: Student Performance Analytics */}
        {portfolioConfig.projects.length > 0 && (
          <div className="mb-12 rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#0d1527] shadow-[0_0_50px_rgba(6,182,212,0.1)] transition-all duration-300 hover:border-cyan-400/50">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image visual */}
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full bg-slate-900 overflow-hidden">
                {!imgErrors[portfolioConfig.projects[0].id] ? (
                  <img
                    src={portfolioConfig.projects[0].image}
                    alt={portfolioConfig.projects[0].fallbackImageAlt}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(portfolioConfig.projects[0].id)}
                    className="w-full h-full object-cover object-left-top hover:scale-102 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0c1527] to-[#16233f]">
                    <Layers className="w-12 h-12 text-cyan-400 mb-3" />
                    <span className="text-base font-bold text-white">Student Performance Analytics</span>
                    <span className="text-xs text-slate-400 mt-1">Interactive Predictive Web Platform</span>
                  </div>
                )}
                {/* Visual gradient overlay on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#0d1527]/90 pointer-events-none" />
              </div>

              {/* Content information */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  {/* Category & Status: Zero-Pill format */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <span className="text-cyan-400 font-semibold">{portfolioConfig.projects[0].category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400 font-medium">{portfolioConfig.projects[0].statusText}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                    {portfolioConfig.projects[0].title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mb-4">
                    {portfolioConfig.projects[0].subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {portfolioConfig.projects[0].description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-8">
                    {portfolioConfig.projects[0].highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies: unboxed text list */}
                  <div className="text-xs text-slate-400 mb-8 pt-4 border-t border-white/10 flex flex-wrap gap-x-3 gap-y-1">
                    <span className="text-slate-500 font-medium">Stack:</span>
                    {portfolioConfig.projects[0].technologies.map((t, idx) => (
                      <span key={t} className="text-slate-300 font-medium">
                        {t}{idx < portfolioConfig.projects[0].technologies.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {portfolioConfig.projects[0].liveUrl && (
                    <a
                      href={portfolioConfig.projects[0].liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {portfolioConfig.projects[0].githubUrl && (
                    <a
                      href={portfolioConfig.projects[0].githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(portfolioConfig.projects[0])}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors ml-auto"
                  >
                    <span>Full Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioConfig.projects.slice(1).map((proj) => (
            <div
              key={proj.id}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0d1527] shadow-xl hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual card */}
                <div className="aspect-[16/9] relative overflow-hidden bg-slate-900">
                  {!imgErrors[proj.id] ? (
                    <img
                      src={proj.image}
                      alt={proj.fallbackImageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(proj.id)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1527] to-[#141f38]">
                      <Layers className="w-8 h-8 text-cyan-400 mb-2" />
                      <span className="text-sm font-bold text-white">{proj.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  {/* Category & Status */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-cyan-400 font-semibold">{proj.category}</span>
                    {proj.statusText && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-300">{proj.statusText}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="text-xs text-slate-400 mb-4 flex flex-wrap gap-x-2 gap-y-1">
                    <span className="text-slate-500">Tech:</span>
                    {proj.technologies.map((t, idx) => (
                      <span key={t} className="text-slate-300">
                        {t}{idx < proj.technologies.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {proj.liveUrl && proj.liveUrl !== '#' && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-slate-400 hover:text-white inline-flex items-center gap-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(proj)}
                  className="text-xs font-medium text-slate-400 hover:text-cyan-400 inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Editable Project Slot for Vignesh */}
        <div className="p-8 rounded-2xl border border-dashed border-white/15 bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">More Projects in Progress</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Ready to add new projects? Simply edit the centralized <code className="text-cyan-300 font-mono">portfolioConfig.ts</code> file to append new web platforms or data analytics notebooks with zero code changes.
              </p>
            </div>
          </div>
          <a
            href={portfolioConfig.personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors whitespace-nowrap"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Repositories</span>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0d1527] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              {activeModalProject.category}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {activeModalProject.title}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {activeModalProject.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Technologies:</span>{' '}
                {activeModalProject.technologies.join(', ')}
              </div>

              <div className="flex items-center gap-3">
                {activeModalProject.liveUrl && activeModalProject.liveUrl !== '#' && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                  >
                    <span>Visit Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

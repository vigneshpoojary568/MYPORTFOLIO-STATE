'use client';

import React, { useState } from 'react';
import { portfolioConfig } from '@/data/portfolioConfig';
import { Terminal, Database, Code, Wrench, Play, Check, Copy } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  
  // Interactive mini data simulation state
  const [metricFilter, setMetricFilter] = useState<'all' | 'high' | 'medium'>('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    ...portfolioConfig.skills.map((c) => ({ id: c.id, name: c.name })),
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? portfolioConfig.skills
      : portfolioConfig.skills.filter((c) => c.id === selectedCategory);

  const sampleDataPoints = [
    { student: 'Student 101', studyHours: 24, attendance: '96%', score: 92, grade: 'A' },
    { student: 'Student 102', studyHours: 14, attendance: '88%', score: 78, grade: 'B' },
    { student: 'Student 103', studyHours: 28, attendance: '99%', score: 96, grade: 'A+' },
    { student: 'Student 104', studyHours: 10, attendance: '82%', score: 71, grade: 'C' },
    { student: 'Student 105', studyHours: 20, attendance: '94%', score: 87, grade: 'B+' },
  ];

  const filteredData = sampleDataPoints.filter((item) => {
    if (metricFilter === 'high') return item.score >= 85;
    if (metricFilter === 'medium') return item.score < 85;
    return true;
  });

  const pythonCodeSnippet = `# Student Performance Exploratory Pipeline
import pandas as pd
import numpy as np

# Load & inspect dataset
df = pd.read_csv('student_academic_records.csv')

# Feature engineering: Study-efficiency index
df['study_efficiency'] = df['exam_score'] / (df['study_hours'] + 1)

# Grouped performance metrics
summary = df.groupby('attendance_tier')['exam_score'].agg(['mean', 'median', 'std'])
print("Target prediction accuracy: 94.2% on test cohort")`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pythonCodeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative bg-[#070c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Skills, Tools & Technologies
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed text-balance">
            A structured breakdown of my technical stack across Python data analytics, modern web architectures, and everyday development tools.
          </p>
        </div>

        {/* Category Tabs (Interactive Filter Controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-[#0d1527] border border-white/10 rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-[#0d1527]/70 border border-white/10 shadow-lg flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">{category.name}</h3>
                  <span className="text-xs text-slate-500">{category.skills.length} competencies</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skill List items with Zero-Pill discipline */}
                <div className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        {/* Unboxed metadata level with typographic separator */}
                        <span className="text-slate-400 font-medium">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">{skill.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Python & Data Demonstration Module */}
        <div className="rounded-2xl border border-white/10 bg-[#0d1527] overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
                <Terminal className="w-4 h-4" />
                <span>Interactive Python Data Analytics Sandbox</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Live Data Pipeline Simulation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Demonstrating dataset processing, feature manipulation, and predictive filtering logic.
              </p>
            </div>

            {/* Segmented Filter Control */}
            <div className="flex items-center gap-1.5 p-1 bg-black/40 border border-white/10 rounded-lg">
              <button
                type="button"
                onClick={() => setMetricFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  metricFilter === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Records ({sampleDataPoints.length})
              </button>
              <button
                type="button"
                onClick={() => setMetricFilter('high')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  metricFilter === 'high'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                High Scores (≥85)
              </button>
              <button
                type="button"
                onClick={() => setMetricFilter('medium')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  metricFilter === 'medium'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Medium Scores (&lt;85)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left: Code Snippet */}
            <div className="lg:col-span-7 p-6 font-mono text-xs text-slate-300 bg-black/30 relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-500 text-[11px]">
                <span>pipeline_transform.py</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto text-[11.5px] leading-relaxed text-slate-300">
                <code>{pythonCodeSnippet}</code>
              </pre>
            </div>

            {/* Right: Data Table Preview with Tabular Numerals */}
            <div className="lg:col-span-5 p-6 bg-[#091122]">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-semibold text-white">Student Dataset Sample</span>
                <span className="text-slate-500">{filteredData.length} active rows</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-500 font-semibold">
                      <th className="pb-2">Cohort</th>
                      <th className="pb-2">Hours</th>
                      <th className="pb-2">Attend</th>
                      <th className="pb-2 text-right">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono tabular-nums">
                    {filteredData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-2 text-slate-300">{row.student}</td>
                        <td className="py-2 text-slate-400">{row.studyHours}h</td>
                        <td className="py-2 text-slate-400">{row.attendance}</td>
                        <td className="py-2 text-right text-cyan-400 font-bold">{row.score}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400">
                Real-world project implementation available at{' '}
                <a
                  href="https://studentperformance-two.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Student Performance App ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

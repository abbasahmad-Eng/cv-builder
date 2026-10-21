'use client';

import React, { useState } from 'react';
import { 
  Printer, User, Briefcase, GraduationCap, Wrench, Globe, Award, 
  FolderKanban, Plus, Trash2, Palette 
} from 'lucide-react';

export default function ResumeBuilder() {
  const [personal, setPersonal] = useState({
    name: 'Abbas Ahmad',
    title: 'Software Engineer & AI Enthusiast',
    email: 'abbasahmadfata@gmail.com',
    phone: '+92 300 1234567',
    location: 'Islamabad, Pakistan',
    website: 'https://github.com',
    summary: 'Driven software engineer specializing in web application development, machine learning, and data analytics.'
  });

  const [experience, setExperience] = useState([
    {
      id: 1,
      role: 'Full Stack Engineer',
      company: 'Tech Solutions Inc.',
      date: '2024 – Present',
      description: 'Developing high-performance Next.js applications and integrating enterprise APIs.'
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'GIKI Institute',
      date: '2020 – 2024',
      details: 'Graduated with Distinction. Focused on Machine Learning and Software Architecture.'
    }
  ]);

  const [skills, setSkills] = useState([
    { id: 1, name: 'React / Next.js' },
    { id: 2, name: 'Python & Machine Learning' },
    { id: 3, name: 'Tailwind CSS' }
  ]);

  const [languages, setLanguages] = useState([
    { id: 1, name: 'English', level: 'Professional Working' },
    { id: 2, name: 'Pashto', level: 'Native' }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI Resume Builder Platform',
      role: 'Lead Developer',
      description: 'Built a full-featured FlowCV clone using Next.js, Tailwind, and Vercel.'
    }
  ]);

  const [certificates, setCertificates] = useState([
    { id: 1, title: 'SAP ERP Fundamentals', issuer: 'TMC Academy', date: '2025' }
  ]);

  const [accentColor, setAccentColor] = useState('#4f46e5');
  const [activeTab, setActiveTab] = useState('personal');

  // CLEAN PRINT ENGINE FUNCTION
  const handlePrint = () => {
    const printFrame = document.createElement('iframe');
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';

    document.body.appendChild(printFrame);

    const frameDoc = printFrame.contentWindow?.document;
    if (!frameDoc) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${personal.name} - Resume</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 12mm;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              color: #111827;
              margin: 0;
              padding: 0;
              background: #ffffff;
            }
            .cv-container {
              width: 100%;
              box-sizing: border-box;
            }
            .cv-header {
              border-bottom: 2px solid ${accentColor};
              padding-bottom: 12px;
              margin-bottom: 16px;
            }
            .cv-title {
              font-size: 26px;
              font-weight: 800;
              margin: 0;
              color: #111827;
            }
            .cv-subtitle {
              font-size: 14px;
              font-weight: 700;
              color: ${accentColor};
              margin: 4px 0 8px 0;
            }
            .cv-contact {
              font-size: 11px;
              color: #4b5563;
              display: flex;
              flex-wrap: wrap;
              gap: 12px;
            }
            .cv-section {
              margin-bottom: 14px;
            }
            .cv-section-title {
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: ${accentColor};
              margin-bottom: 6px;
              border-bottom: 1px solid #f3f4f6;
              padding-bottom: 2px;
            }
            .cv-text {
              font-size: 11.5px;
              color: #374151;
              line-height: 1.4;
              margin: 0;
            }
            .item-row {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
            }
            .item-title {
              font-size: 12px;
              font-weight: 700;
              color: #111827;
              margin: 0;
            }
            .item-date {
              font-size: 10.5px;
              font-weight: 600;
              color: #6b7280;
            }
            .item-sub {
              font-size: 11.5px;
              font-weight: 600;
              color: ${accentColor};
              margin: 2px 0;
            }
            .skill-pill {
              display: inline-block;
              background: #f3f4f6;
              border: 1px solid #e5e7eb;
              padding: 2px 8px;
              border-radius: 4px;
              font-size: 10.5px;
              font-weight: 500;
              color: #1f2937;
              margin-right: 4px;
              margin-bottom: 4px;
            }
            .declaration-box {
              margin-top: 20px;
              border-top: 1px solid #e5e7eb;
              padding-top: 10px;
              text-align: center;
              font-size: 10.5px;
              color: #6b7280;
              font-style: italic;
            }
          </style>
        </head>
        <body>
          <div class="cv-container">
            <div class="cv-header">
              <h1 class="cv-title">${personal.name}</h1>
              <div class="cv-subtitle">${personal.title}</div>
              <div class="cv-contact">
                ${personal.email ? `<span>📧 ${personal.email}</span>` : ''}
                ${personal.phone ? `<span>📞 ${personal.phone}</span>` : ''}
                ${personal.location ? `<span>📍 ${personal.location}</span>` : ''}
                ${personal.website ? `<span>🌐 ${personal.website}</span>` : ''}
              </div>
            </div>

            ${personal.summary ? `
              <div class="cv-section">
                <div class="cv-section-title">Professional Summary</div>
                <p class="cv-text">${personal.summary}</p>
              </div>
            ` : ''}

            ${experience.length > 0 ? `
              <div class="cv-section">
                <div class="cv-section-title">Professional Experience</div>
                ${experience.map(exp => `
                  <div style="margin-bottom: 8px;">
                    <div class="item-row">
                      <h3 class="item-title">${exp.role}</h3>
                      <span class="item-date">${exp.date}</span>
                    </div>
                    <div class="item-sub">${exp.company}</div>
                    <p class="cv-text">${exp.description}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${education.length > 0 ? `
              <div class="cv-section">
                <div class="cv-section-title">Education</div>
                ${education.map(edu => `
                  <div style="margin-bottom: 6px;">
                    <div class="item-row">
                      <h3 class="item-title">${edu.degree}</h3>
                      <span class="item-date">${edu.date}</span>
                    </div>
                    <div class="item-sub">${edu.institution}</div>
                    ${edu.details ? `<p class="cv-text">${edu.details}</p>` : ''}
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${skills.length > 0 ? `
              <div class="cv-section">
                <div class="cv-section-title">Skills</div>
                <div>
                  ${skills.map(s => `<span class="skill-pill">${s.name}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${languages.length > 0 ? `
              <div class="cv-section">
                <div class="cv-section-title">Languages</div>
                <div class="cv-text">
                  ${languages.map(l => `<span><strong>${l.name}:</strong> ${l.level}</span>`).join('&nbsp;&nbsp;•&nbsp;&nbsp;')}
                </div>
              </div>
            ` : ''}

            ${projects.length > 0 ? `
              <div class="cv-section">
                <div class="cv-section-title">Key Projects</div>
                ${projects.map(p => `
                  <div style="margin-bottom: 6px;">
                    <h3 class="item-title">${p.title}</h3>
                    <p class="cv-text">${p.description}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <div class="declaration-box">
              I hereby declare that all the information provided above is true and accurate to the best of my knowledge.
            </div>
          </div>
        </body>
      </html>
    `;

    frameDoc.open();
    frameDoc.write(htmlContent);
    frameDoc.close();

    setTimeout(() => {
      printFrame.contentWindow?.focus();
      printFrame.contentWindow?.print();
      setTimeout(() => {
        document.body.removeChild(printFrame);
      }, 1000);
    }, 300);
  };

  const addExperience = () => {
    setExperience([...experience, { id: Date.now(), role: '', company: '', date: '', description: '' }]);
  };

  const addEducation = () => {
    setEducation([...education, { id: Date.now(), degree: '', institution: '', date: '', details: '' }]);
  };

  const addSkill = () => {
    setSkills([...skills, { id: Date.now(), name: '' }]);
  };

  const addProject = () => {
    setProjects([...projects, { id: Date.now(), title: '', role: '', description: '' }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex flex-col">
      
      {/* TOP HEADER */}
      <header className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 font-extrabold px-2.5 py-1 rounded text-lg">CV</div>
          <span className="font-bold text-lg">FlowCV Studio Pro</span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <Palette className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-medium text-slate-300">Accent:</span>
            <input 
              type="color" 
              value={accentColor} 
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-5 h-5 rounded cursor-pointer bg-transparent border-0"
            />
          </div>

          <button 
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-lg transition cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
        
        {/* EDITOR PANEL */}
        <div className="w-full lg:w-1/2 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-61px)]">
          <div className="flex overflow-x-auto border-b border-gray-200 bg-slate-50 p-2 gap-1">
            {[
              { id: 'personal', name: 'Personal', icon: User },
              { id: 'experience', name: 'Experience', icon: Briefcase },
              { id: 'education', name: 'Education', icon: GraduationCap },
              { id: 'skills', name: 'Skills', icon: Wrench },
              { id: 'languages', name: 'Languages', icon: Globe },
              { id: 'projects', name: 'Projects', icon: FolderKanban },
              { id: 'certs', name: 'Certificates', icon: Award }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition ${
                    activeTab === tab.id ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {activeTab === 'personal' && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-800 border-b pb-2">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Full Name</label>
                    <input type="text" value={personal.name} onChange={(e) => setPersonal({...personal, name: e.target.value})} className="w-full border rounded-lg p-2 text-sm mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Job Title</label>
                    <input type="text" value={personal.title} onChange={(e) => setPersonal({...personal, title: e.target.value})} className="w-full border rounded-lg p-2 text-sm mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Email</label>
                    <input type="text" value={personal.email} onChange={(e) => setPersonal({...personal, email: e.target.value})} className="w-full border rounded-lg p-2 text-sm mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Phone</label>
                    <input type="text" value={personal.phone} onChange={(e) => setPersonal({...personal, phone: e.target.value})} className="w-full border rounded-lg p-2 text-sm mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Location</label>
                    <input type="text" value={personal.location} onChange={(e) => setPersonal({...personal, location: e.target.value})} className="w-full border rounded-lg p-2 text-sm mt-1" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Website</label>
                    <input type="text" value={personal.website} onChange={(e) => setPersonal({...personal, website: e.target.value})} className="w-full border rounded-lg p-2 text-sm mt-1" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">Summary</label>
                  <textarea rows={4} value={personal.summary} onChange={(e) => setPersonal({...personal, summary: e.target.value})} className="w-full border rounded-lg p-2 text-sm mt-1" />
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800">Experience</h3>
                  <button onClick={addExperience} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border"><Plus className="w-3.5 h-3.5 inline" /> Add Job</button>
                </div>
                {experience.map((exp, idx) => (
                  <div key={exp.id} className="p-4 bg-slate-50 border rounded-xl space-y-3 relative">
                    <button onClick={() => setExperience(experience.filter(e => e.id !== exp.id))} className="absolute top-3 right-3 text-red-500"><Trash2 className="w-4 h-4" /></button>
                    <input type="text" placeholder="Role" value={exp.role} onChange={(e) => {const u = [...experience]; u[idx].role = e.target.value; setExperience(u);}} className="border rounded p-2 text-xs w-full font-semibold" />
                    <input type="text" placeholder="Company" value={exp.company} onChange={(e) => {const u = [...experience]; u[idx].company = e.target.value; setExperience(u);}} className="border rounded p-2 text-xs w-full" />
                    <input type="text" placeholder="Date" value={exp.date} onChange={(e) => {const u = [...experience]; u[idx].date = e.target.value; setExperience(u);}} className="border rounded p-2 text-xs w-full" />
                    <textarea rows={2} placeholder="Description" value={exp.description} onChange={(e) => {const u = [...experience]; u[idx].description = e.target.value; setExperience(u);}} className="border rounded p-2 text-xs w-full" />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800">Education</h3>
                  <button onClick={addEducation} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border"><Plus className="w-3.5 h-3.5 inline" /> Add</button>
                </div>
                {education.map((edu, idx) => (
                  <div key={edu.id} className="p-4 bg-slate-50 border rounded-xl space-y-3 relative">
                    <button onClick={() => setEducation(education.filter(e => e.id !== edu.id))} className="absolute top-3 right-3 text-red-500"><Trash2 className="w-4 h-4" /></button>
                    <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => {const u = [...education]; u[idx].degree = e.target.value; setEducation(u);}} className="border rounded p-2 text-xs w-full font-semibold" />
                    <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => {const u = [...education]; u[idx].institution = e.target.value; setEducation(u);}} className="border rounded p-2 text-xs w-full" />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800">Skills</h3>
                  <button onClick={addSkill} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border"><Plus className="w-3.5 h-3.5 inline" /> Add Skill</button>
                </div>
                {skills.map((skill, idx) => (
                  <div key={skill.id} className="flex items-center gap-2">
                    <input type="text" value={skill.name} onChange={(e) => {const u = [...skills]; u[idx].name = e.target.value; setSkills(u);}} className="border rounded p-2 text-xs flex-1" />
                    <button onClick={() => setSkills(skills.filter(s => s.id !== skill.id))} className="text-red-500"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'languages' && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-800 border-b pb-2">Languages</h3>
                {languages.map((lang, idx) => (
                  <div key={lang.id} className="flex gap-2">
                    <input type="text" value={lang.name} onChange={(e) => {const u = [...languages]; u[idx].name = e.target.value; setLanguages(u);}} className="border rounded p-1.5 text-xs w-1/2" />
                    <input type="text" value={lang.level} onChange={(e) => {const u = [...languages]; u[idx].level = e.target.value; setLanguages(u);}} className="border rounded p-1.5 text-xs w-1/2" />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800">Projects</h3>
                  <button onClick={addProject} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border"><Plus className="w-3.5 h-3.5 inline" /> Add</button>
                </div>
                {projects.map((proj, idx) => (
                  <div key={proj.id} className="p-4 bg-slate-50 border rounded-xl space-y-2 relative">
                    <button onClick={() => setProjects(projects.filter(p => p.id !== proj.id))} className="absolute top-3 right-3 text-red-500"><Trash2 className="w-4 h-4" /></button>
                    <input type="text" placeholder="Title" value={proj.title} onChange={(e) => {const u = [...projects]; u[idx].title = e.target.value; setProjects(u);}} className="border rounded p-2 text-xs w-full font-semibold" />
                    <textarea rows={2} placeholder="Description" value={proj.description} onChange={(e) => {const u = [...projects]; u[idx].description = e.target.value; setProjects(u);}} className="border rounded p-2 text-xs w-full" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* LIVE CANVAS PREVIEW */}
        <div className="w-full lg:w-1/2 bg-slate-200 p-4 lg:p-8 flex justify-center items-start overflow-y-auto h-[calc(100vh-61px)]">
          <div className="bg-white w-full max-w-[800px] shadow-2xl p-8 text-gray-800 font-sans border border-gray-300">
            
            <header className="border-b-2 pb-4 mb-4" style={{ borderColor: accentColor }}>
              <h1 className="text-2xl font-extrabold text-gray-900">{personal.name}</h1>
              <p className="text-sm font-bold mt-0.5" style={{ color: accentColor }}>{personal.title}</p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mt-2 font-medium">
                {personal.email && <span>📧 {personal.email}</span>}
                {personal.phone && <span>📞 {personal.phone}</span>}
                {personal.location && <span>📍 {personal.location}</span>}
                {personal.website && <span>🌐 {personal.website}</span>}
              </div>
            </header>

            {personal.summary && (
              <section className="mb-4">
                <h2 className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>Professional Summary</h2>
                <p className="text-xs text-gray-700 leading-normal">{personal.summary}</p>
              </section>
            )}

            {experience.length > 0 && (
              <section className="mb-4">
                <h2 className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Professional Experience</h2>
                <div className="space-y-3">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xs font-bold text-gray-900">{exp.role}</h3>
                        <span className="text-[10px] font-semibold text-gray-500">{exp.date}</span>
                      </div>
                      <p className="text-xs font-bold mt-0.5" style={{ color: accentColor }}>{exp.company}</p>
                      <p className="text-xs text-gray-700 mt-0.5">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section className="mb-4">
                <h2 className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Education</h2>
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xs font-bold text-gray-900">{edu.degree}</h3>
                      <span className="text-[10px] font-semibold text-gray-500">{edu.date}</span>
                    </div>
                    <p className="text-xs font-semibold" style={{ color: accentColor }}>{edu.institution}</p>
                    {edu.details && <p className="text-xs text-gray-600 mt-0.5">{edu.details}</p>}
                  </div>
                ))}
              </section>
            )}

            {skills.length > 0 && (
              <section className="mb-4">
                <h2 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>Skills</h2>
                <div className="flex flex-wrap gap-1">
                  {skills.map((skill) => (
                    <span key={skill.id} className="bg-slate-100 border border-slate-200 text-slate-800 px-2 py-0.5 rounded text-[10px] font-medium">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {languages.length > 0 && (
              <section className="mb-4">
                <h2 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: accentColor }}>Languages</h2>
                <div className="flex flex-wrap gap-4 text-xs text-gray-700">
                  {languages.map((lang) => (
                    <span key={lang.id}><strong>{lang.name}:</strong> {lang.level}</span>
                  ))}
                </div>
              </section>
            )}

            {projects.length > 0 && (
              <section className="mb-4">
                <h2 className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Key Projects</h2>
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h3 className="text-xs font-bold text-gray-900">{proj.title}</h3>
                    <p className="text-xs text-gray-700 mt-0.5">{proj.description}</p>
                  </div>
                ))}
              </section>
            )}

            <div className="mt-6 border-t pt-3 text-center text-[10.5px] text-gray-500 italic">
              I hereby declare that all the information provided above is true and accurate to the best of my knowledge.
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
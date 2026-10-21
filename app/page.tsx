'use client';

import React, { useState } from 'react';
import { 
  Printer, User, Briefcase, GraduationCap, Wrench, Globe, Award, 
  FolderKanban, Plus, Trash2, Edit3, Sparkles, Palette 
} from 'lucide-react';

export default function FullResumeBuilder() {
  const [personal, setPersonal] = useState({
    name: 'Abbas Ahmad',
    title: 'Electronic Engineer & Software Developer',
    email: 'abbasahmadfata@gmail.com',
    phone: '+92 345 4735550',
    location: 'Islamabad, Pakistan',
    website: 'abbas-cv-builder.vercel.app',
    summary: 'Motivated Management Trainee Officer and Electronic Engineer with hands-on corporate experience at TMC. Proven ability to support project planning, coordination, documentation, and stakeholder communication.'
  });

  const [experience, setExperience] = useState([
    {
      id: 1,
      role: 'LMS Trainer & Consultant',
      company: 'Tally Marks Consultancy (TMC)',
      location: 'Karachi / Islamabad, Pakistan',
      date: '12/08/2025 - 15/07/2026',
      description: 'Configured academic timetabling sessions, buildings, rooms, and instructor profiles in UniTime. Delivered end-user training sessions for enterprise software applications and managed client onboarding documentation.'
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: 'Bachelor of Science in Engineering Sciences',
      institution: 'GIKI Institute of Engineering Sciences and Technology',
      location: 'Topi, KPK, Pakistan',
      date: '2020 - 2024',
      details: 'Graduated with Distinction. Specialization in Machine Learning, Software Architecture, and Data Analytics.'
    }
  ]);

  const [skills, setSkills] = useState([
    { id: 1, name: 'Python Programming' },
    { id: 2, name: 'Machine Learning & AI' },
    { id: 3, name: 'Next.js & React' },
    { id: 4, name: 'Tailwind CSS' },
    { id: 5, name: 'SQL & Database Management' },
    { id: 6, name: 'Excel & Data Dashboards' }
  ]);

  const [languages, setLanguages] = useState([
    { id: 1, name: 'English', level: 'Professional Working' },
    { id: 2, name: 'Pashto', level: 'Native' },
    { id: 3, name: 'Urdu', level: 'Fluent' }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI Resume Builder Platform',
      role: 'Lead Developer',
      description: 'Built a full-featured FlowCV clone using Next.js, Tailwind CSS, and Vercel.'
    }
  ]);

  const [certificates, setCertificates] = useState([
    { id: 1, title: 'SAP ERP Fundamentals', issuer: 'TMC Academy', date: '2025' }
  ]);

  const [activeTemplate, setActiveTemplate] = useState('modern');
  const [accentColor, setAccentColor] = useState('#4f46e5');
  const [activeTab, setActiveTab] = useState('personal');

  const handlePrint = () => {
    window.print();
  };

  const addExperience = () => {
    setExperience([...experience, { id: Date.now(), role: '', company: '', location: '', date: '', description: '' }]);
  };

  const addEducation = () => {
    setEducation([...education, { id: Date.now(), degree: '', institution: '', location: '', date: '', details: '' }]);
  };

  const addSkill = () => {
    setSkills([...skills, { id: Date.now(), name: '' }]);
  };

  const addProject = () => {
    setProjects([...projects, { id: Date.now(), title: '', role: '', description: '' }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex flex-col">
      
      {/* GLOBAL PRINT STYLING INSTRUCTION FOR BROWSER */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 10mm;
            size: A4 portrait;
          }
          body {
            background: white !important;
          }
          body * {
            visibility: hidden;
          }
          #printable-cv-area, #printable-cv-area * {
            visibility: visible;
          }
          #printable-cv-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>

      {/* TOP HEADER / NAVBAR */}
      <header className="no-print bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-md">
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
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-lg transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
        
        {/* LEFT SIDE: EDITOR PANEL */}
        <div className="no-print w-full lg:w-1/2 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-61px)]">
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

            {activeTab === 'certs' && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-800 border-b pb-2">Certifications</h3>
                {certificates.map((cert, idx) => (
                  <input key={cert.id} type="text" value={cert.title} onChange={(e) => {const u = [...certificates]; u[idx].title = e.target.value; setCertificates(u);}} className="border rounded p-2 text-xs w-full" />
                ))}
              </div>
            )}

          </div>
        </div>

        {/* RIGHT SIDE: LIVE RESUME CANVAS PREVIEW */}
        <div className="w-full lg:w-1/2 bg-slate-200 p-4 lg:p-8 flex justify-center items-start overflow-y-auto h-[calc(100vh-61px)] print:w-full print:p-0 print:bg-white">
          
          <div 
            id="printable-cv-area"
            className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl p-10 text-gray-800 font-sans border border-gray-300"
          >
            
            <header className="border-b-2 pb-6 mb-6" style={{ borderColor: accentColor }}>
              <h1 className="text-3xl font-extrabold text-gray-900">{personal.name}</h1>
              <p className="text-base font-bold mt-1" style={{ color: accentColor }}>{personal.title}</p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mt-3 font-medium">
                {personal.email && <span>📧 {personal.email}</span>}
                {personal.phone && <span>📞 {personal.phone}</span>}
                {personal.location && <span>📍 {personal.location}</span>}
                {personal.website && <span>🌐 {personal.website}</span>}
              </div>
            </header>

            {personal.summary && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Professional Summary</h2>
                <p className="text-xs text-gray-700 leading-relaxed">{personal.summary}</p>
              </section>
            )}

            {experience.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>Professional Experience</h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xs font-bold text-gray-900">{exp.role}</h3>
                        <span className="text-[11px] font-semibold text-gray-500">{exp.date}</span>
                      </div>
                      <p className="text-xs font-bold mt-0.5" style={{ color: accentColor }}>{exp.company}</p>
                      <p className="text-xs text-gray-700 mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>Education</h2>
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xs font-bold text-gray-900">{edu.degree}</h3>
                      <span className="text-[11px] font-semibold text-gray-500">{edu.date}</span>
                    </div>
                    <p className="text-xs font-semibold" style={{ color: accentColor }}>{edu.institution}</p>
                  </div>
                ))}
              </section>
            )}

            {skills.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Skills</h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span key={skill.id} className="bg-slate-100 border border-slate-200 text-slate-800 px-2.5 py-1 rounded text-[11px] font-medium">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {languages.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>Languages</h2>
                <div className="flex flex-wrap gap-4 text-xs text-gray-700">
                  {languages.map((lang) => (
                    <span key={lang.id}><strong>{lang.name}:</strong> {lang.level}</span>
                  ))}
                </div>
              </section>
            )}

            {projects.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>Key Projects</h2>
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h3 className="text-xs font-bold text-gray-900">{proj.title}</h3>
                    <p className="text-xs text-gray-700 mt-0.5">{proj.description}</p>
                  </div>
                ))}
              </section>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
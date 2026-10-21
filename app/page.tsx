'use client';

import React, { useState, useRef } from 'react';
import { 
  Printer, User, Briefcase, GraduationCap, Wrench, Globe, Award, 
  FolderKanban, Plus, Trash2, Edit3, Heart, Shield, BookOpen, 
  Users, Sparkles, HelpCircle, Layout, Palette, FileText, Check, ChevronDown
} from 'lucide-react';

export default function FullResumeBuilder() {
  // --- 1. STATE FOR ALL 16 RESUME SECTIONS ---
  
  // Section 1: Personal Information
  const [personal, setPersonal] = useState({
    name: 'Abbas Ahmad',
    title: 'Electronic Engineer & Software Developer',
    email: 'abbasahmadfata@gmail.com',
    phone: '+92 345 4735550',
    location: 'Islamabad, Pakistan',
    website: 'abbas-cv-builder.vercel.app',
    linkedin: 'linkedin.com/in/abbas-ahmad',
    github: 'github.com/abbasahmad-Eng',
    summary: 'Motivated Management Trainee Officer and Electronic Engineer with hands-on corporate experience at TMC. Proven ability to support project planning, coordination, documentation, and stakeholder communication. Strong theoretical knowledge of SAP ERP implementations and Project Management methodologies.'
  });

  // Section 2: Experience
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

  // Section 3: Education
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

  // Section 4: Skills
  const [skills, setSkills] = useState([
    { id: 1, name: 'Python Programming', category: 'Technical' },
    { id: 2, name: 'Machine Learning & AI', category: 'Technical' },
    { id: 3, name: 'Next.js & React', category: 'Frontend' },
    { id: 4, name: 'Tailwind CSS', category: 'Frontend' },
    { id: 5, name: 'SQL & Database Management', category: 'Backend' },
    { id: 6, name: 'Excel & Data Dashboards', category: 'Analytics' }
  ]);

  // Section 5: Languages
  const [languages, setLanguages] = useState([
    { id: 1, name: 'English', level: 'Professional Working' },
    { id: 2, name: 'Pashto', level: 'Native' },
    { id: 3, name: 'Urdu', level: 'Fluent' }
  ]);

  // Section 6: Key Projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI Resume Builder Platform',
      role: 'Lead Developer',
      date: '2026',
      description: 'Built a full-featured FlowCV clone using Next.js, Tailwind CSS, and Vercel with automatic PDF export layout features.',
      relevance: 'Demonstrates modern web architecture and UI/UX design.'
    },
    {
      id: 2,
      title: 'Indigenous Healthcare Sensor',
      role: 'Project Lead',
      date: '2024',
      description: 'Led a cross-functional team through the project lifecycle including planning, sensor integration, and timeline management.',
      relevance: 'Showcases foundational project planning and coordination.'
    }
  ]);

  // Section 7: Certifications
  const [certificates, setCertificates] = useState([
    { id: 1, title: 'SAP ERP Fundamentals', issuer: 'TMC Academy', date: '2025' },
    { id: 2, title: 'Machine Learning Specialization', issuer: 'Coursera / Stanford', date: '2024' }
  ]);

  // Section 8: Awards & Honors
  const [awards, setAwards] = useState([
    { id: 1, title: 'Academic Distinction Award', issuer: 'GIKI Institute', date: '2024', details: 'Awarded for top performance in Senior Engineering Project.' }
  ]);

  // Section 9: Volunteer Work
  const [volunteer, setVolunteer] = useState([
    { id: 1, role: 'Technical Event Coordinator', organization: 'GIKI Media Club', date: '2022 - 2023', description: 'Organized national student competitions and workshops.' }
  ]);

  // Section 10: Publications
  const [publications, setPublications] = useState([
    { id: 1, title: 'AI-Driven Healthcare Monitoring Systems', publisher: 'IEEE Student Conference', date: '2024' }
  ]);

  // Section 11: Interests & Hobbies
  const [interests, setInterests] = useState([
    { id: 1, name: 'Open Source AI Models' },
    { id: 2, name: 'Tech Blogging' },
    { id: 3, name: 'Cricket' }
  ]);

  // Section 12: References
  const [references, setReferences] = useState([
    { id: 1, name: 'Available upon request', contact: 'Contact details provided when requested.' }
  ]);

  // Section 13: Courses
  const [courses, setCourses] = useState([
    { id: 1, name: 'Advanced Data Structures in Python', institution: 'Online', date: '2025' }
  ]);

  // Section 14: Organizations / Affiliations
  const [organizations, setOrganizations] = useState([
    { id: 1, name: 'Pakistan Engineering Council (PEC)', role: 'Registered Engineer', date: '2024 - Present' }
  ]);

  // Section 15: Custom Section
  const [customSection, setCustomSection] = useState({
    title: 'Declaration',
    content: 'I hereby declare that all information provided above is true and accurate to the best of my knowledge.'
  });

  // Section 16: Summary / Objective Toggle
  const [showDeclaration, setShowDeclaration] = useState(true);

  // --- UI CONTROLS & STYLES ---
  const [activeTemplate, setActiveTemplate] = useState('modern');
  const [accentColor, setAccentColor] = useState('#4f46e5'); // Indigo-600
  const [activeTab, setActiveTab] = useState('personal');

  // Trigger Print Function
  const handlePrint = () => {
    window.print();
  };

  // Helper functions to add items dynamically
  const addExperience = () => {
    setExperience([...experience, { id: Date.now(), role: '', company: '', location: '', date: '', description: '' }]);
  };

  const addEducation = () => {
    setEducation([...education, { id: Date.now(), degree: '', institution: '', location: '', date: '', details: '' }]);
  };

  const addSkill = () => {
    setSkills([...skills, { id: Date.now(), name: '', category: 'General' }]);
  };

  const addProject = () => {
    setProjects([...projects, { id: Date.now(), title: '', role: '', date: '', description: '', relevance: '' }]);
  };

  const addCertificate = () => {
    setCertificates([...certificates, { id: Date.now(), title: '', issuer: '', date: '' }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex flex-col">
      
      {/* PERFECT PRINT CSS STYLES - HIDES EVERYTHING EXCEPT THE RESUME PREVIEW */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: A4 portrait;
          }
          body {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
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
            min-height: 100vh !important;
            margin: 0 !important;
            padding: 15mm 15mm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* TOP HEADER / NAVBAR */}
      <header className="no-print bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 font-extrabold px-2.5 py-1 rounded text-lg tracking-wider">CV</div>
          <span className="font-bold text-lg tracking-wide">FlowCV Studio Pro</span>
        </div>

        {/* Action Controls */}
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

      {/* MAIN LAYOUT CONTAINER */}
      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
        
        {/* LEFT SIDE: MULTI-TAB EDITOR PANEL */}
        <div className="no-print w-full lg:w-1/2 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-61px)]">
          
          {/* Section Selector Tabs */}
          <div className="flex overflow-x-auto border-b border-gray-200 bg-slate-50 p-2 gap-1 scrollbar-thin">
            {[
              { id: 'personal', name: 'Personal', icon: User },
              { id: 'experience', name: 'Experience', icon: Briefcase },
              { id: 'education', name: 'Education', icon: GraduationCap },
              { id: 'skills', name: 'Skills', icon: Wrench },
              { id: 'languages', name: 'Languages', icon: Globe },
              { id: 'projects', name: 'Projects', icon: FolderKanban },
              { id: 'certs', name: 'Certificates', icon: Award },
              { id: 'more', name: 'More (16 Sections)', icon: Sparkles }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition ${
                    activeTab === tab.id 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content Form Fields */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Template Chooser Header */}
            <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-indigo-900 uppercase">Selected Template</h3>
                <p className="text-sm font-semibold text-indigo-700 capitalize">{activeTemplate} Layout</p>
              </div>
              <select 
                value={activeTemplate} 
                onChange={(e) => setActiveTemplate(e.target.value)}
                className="text-xs font-semibold border-gray-300 border rounded-lg p-2 bg-white text-gray-800 shadow-sm"
              >
                <option value="modern">1. Modern Executive</option>
                <option value="minimal">2. Minimalist Clean</option>
                <option value="sidebar">3. Sidebar Compact</option>
                <option value="classic">4. Classic Academic</option>
              </select>
            </div>

            {/* TAB 1: PERSONAL DETAILS */}
            {activeTab === 'personal' && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-600" /> Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Full Name</label>
                    <input 
                      type="text" value={personal.name} 
                      onChange={(e) => setPersonal({...personal, name: e.target.value})}
                      className="w-full border rounded-lg p-2 text-sm mt-1 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Job Title / Headline</label>
                    <input 
                      type="text" value={personal.title} 
                      onChange={(e) => setPersonal({...personal, title: e.target.value})}
                      className="w-full border rounded-lg p-2 text-sm mt-1 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Email Address</label>
                    <input 
                      type="text" value={personal.email} 
                      onChange={(e) => setPersonal({...personal, email: e.target.value})}
                      className="w-full border rounded-lg p-2 text-sm mt-1 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Phone Number</label>
                    <input 
                      type="text" value={personal.phone} 
                      onChange={(e) => setPersonal({...personal, phone: e.target.value})}
                      className="w-full border rounded-lg p-2 text-sm mt-1 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Location (City, Country)</label>
                    <input 
                      type="text" value={personal.location} 
                      onChange={(e) => setPersonal({...personal, location: e.target.value})}
                      className="w-full border rounded-lg p-2 text-sm mt-1 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600">Website / Portfolio</label>
                    <input 
                      type="text" value={personal.website} 
                      onChange={(e) => setPersonal({...personal, website: e.target.value})}
                      className="w-full border rounded-lg p-2 text-sm mt-1 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">Professional Summary</label>
                  <textarea 
                    rows={4} value={personal.summary} 
                    onChange={(e) => setPersonal({...personal, summary: e.target.value})}
                    className="w-full border rounded-lg p-2 text-sm mt-1 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-600" /> Work History
                  </h3>
                  <button onClick={addExperience} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border border-indigo-200 flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Add Job
                  </button>
                </div>
                {experience.map((exp, idx) => (
                  <div key={exp.id} className="p-4 bg-slate-50 border rounded-xl space-y-3 relative group">
                    <button 
                      onClick={() => setExperience(experience.filter(e => e.id !== exp.id))}
                      className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" placeholder="Role Title" value={exp.role} 
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].role = e.target.value;
                          setExperience(updated);
                        }}
                        className="border rounded p-2 text-xs font-semibold"
                      />
                      <input 
                        type="text" placeholder="Company Name" value={exp.company} 
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].company = e.target.value;
                          setExperience(updated);
                        }}
                        className="border rounded p-2 text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" placeholder="Dates (e.g., 2023 - Present)" value={exp.date} 
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].date = e.target.value;
                          setExperience(updated);
                        }}
                        className="border rounded p-2 text-xs"
                      />
                      <input 
                        type="text" placeholder="Location" value={exp.location} 
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].location = e.target.value;
                          setExperience(updated);
                        }}
                        className="border rounded p-2 text-xs"
                      />
                    </div>
                    <textarea 
                      rows={3} placeholder="Key Responsibilities & Achievements" value={exp.description} 
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[idx].description = e.target.value;
                        setExperience(updated);
                      }}
                      className="w-full border rounded p-2 text-xs"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: EDUCATION */}
            {activeTab === 'education' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-600" /> Education History
                  </h3>
                  <button onClick={addEducation} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border border-indigo-200 flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Add Education
                  </button>
                </div>
                {education.map((edu, idx) => (
                  <div key={edu.id} className="p-4 bg-slate-50 border rounded-xl space-y-3 relative">
                    <button 
                      onClick={() => setEducation(education.filter(e => e.id !== edu.id))}
                      className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <input 
                      type="text" placeholder="Degree / Qualification" value={edu.degree} 
                      onChange={(e) => {
                        const updated = [...education];
                        updated[idx].degree = e.target.value;
                        setEducation(updated);
                      }}
                      className="w-full border rounded p-2 text-xs font-semibold"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" placeholder="University / Institute" value={edu.institution} 
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx].institution = e.target.value;
                          setEducation(updated);
                        }}
                        className="border rounded p-2 text-xs"
                      />
                      <input 
                        type="text" placeholder="Dates" value={edu.date} 
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx].date = e.target.value;
                          setEducation(updated);
                        }}
                        className="border rounded p-2 text-xs"
                      />
                    </div>
                    <textarea 
                      rows={2} placeholder="Additional Honors / Specialization" value={edu.details} 
                      onChange={(e) => {
                        const updated = [...education];
                        updated[idx].details = e.target.value;
                        setEducation(updated);
                      }}
                      className="w-full border rounded p-2 text-xs"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: SKILLS */}
            {activeTab === 'skills' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-indigo-600" /> Skills & Competencies
                  </h3>
                  <button onClick={addSkill} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border border-indigo-200 flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Add Skill
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {skills.map((skill, idx) => (
                    <div key={skill.id} className="flex items-center gap-2 p-2 border rounded-lg bg-slate-50">
                      <input 
                        type="text" value={skill.name} 
                        onChange={(e) => {
                          const updated = [...skills];
                          updated[idx].name = e.target.value;
                          setSkills(updated);
                        }}
                        className="flex-1 border rounded p-1 text-xs font-medium"
                      />
                      <button 
                        onClick={() => setSkills(skills.filter(s => s.id !== skill.id))}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: LANGUAGES */}
            {activeTab === 'languages' && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-600" /> Languages
                </h3>
                {languages.map((lang, idx) => (
                  <div key={lang.id} className="flex items-center gap-2 p-2 border rounded-lg">
                    <input 
                      type="text" value={lang.name} 
                      onChange={(e) => {
                        const updated = [...languages];
                        updated[idx].name = e.target.value;
                        setLanguages(updated);
                      }}
                      className="w-1/2 border rounded p-1.5 text-xs font-semibold"
                    />
                    <input 
                      type="text" value={lang.level} 
                      onChange={(e) => {
                        const updated = [...languages];
                        updated[idx].level = e.target.value;
                        setLanguages(updated);
                      }}
                      className="w-1/2 border rounded p-1.5 text-xs text-gray-600"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* TAB 6: PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <FolderKanban className="w-4 h-4 text-indigo-600" /> Featured Projects
                  </h3>
                  <button onClick={addProject} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border border-indigo-200 flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Add Project
                  </button>
                </div>
                {projects.map((proj, idx) => (
                  <div key={proj.id} className="p-4 bg-slate-50 border rounded-xl space-y-2 relative">
                    <button 
                      onClick={() => setProjects(projects.filter(p => p.id !== proj.id))}
                      className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <input 
                      type="text" placeholder="Project Title" value={proj.title} 
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].title = e.target.value;
                        setProjects(updated);
                      }}
                      className="w-full border rounded p-2 text-xs font-semibold"
                    />
                    <textarea 
                      rows={2} placeholder="Project Description" value={proj.description} 
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx].description = e.target.value;
                        setProjects(updated);
                      }}
                      className="w-full border rounded p-2 text-xs"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* TAB 7: CERTIFICATES */}
            {activeTab === 'certs' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-600" /> Certifications
                  </h3>
                  <button onClick={addCertificate} className="text-xs bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded border border-indigo-200 flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Add Certificate
                  </button>
                </div>
                {certificates.map((cert, idx) => (
                  <div key={cert.id} className="p-3 border rounded-lg space-y-2 relative">
                    <input 
                      type="text" placeholder="Certificate Name" value={cert.title} 
                      onChange={(e) => {
                        const updated = [...certificates];
                        updated[idx].title = e.target.value;
                        setCertificates(updated);
                      }}
                      className="w-full border rounded p-1.5 text-xs font-semibold"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" placeholder="Issuing Organization" value={cert.issuer} 
                        onChange={(e) => {
                          const updated = [...certificates];
                          updated[idx].issuer = e.target.value;
                          setCertificates(updated);
                        }}
                        className="border rounded p-1.5 text-xs"
                      />
                      <input 
                        type="text" placeholder="Year" value={cert.date} 
                        onChange={(e) => {
                          const updated = [...certificates];
                          updated[idx].date = e.target.value;
                          setCertificates(updated);
                        }}
                        className="border rounded p-1.5 text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 8: ADDITIONAL SECTIONS (16 TOTAL) */}
            {activeTab === 'more' && (
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" /> Additional Sections
                </h3>

                {/* Custom Declaration Toggle */}
                <div className="p-4 bg-slate-50 border rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-gray-700">Include Custom Declaration</label>
                    <input 
                      type="checkbox" 
                      checked={showDeclaration} 
                      onChange={(e) => setShowDeclaration(e.target.checked)}
                      className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
                    />
                  </div>
                  {showDeclaration && (
                    <textarea 
                      rows={2} 
                      value={customSection.content}
                      onChange={(e) => setCustomSection({...customSection, content: e.target.value})}
                      className="w-full border rounded p-2 text-xs text-gray-700 mt-2"
                    />
                  )}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* RIGHT SIDE: LIVE RESUME CANVAS PREVIEW */}
        <div className="w-full lg:w-1/2 bg-slate-200 p-4 lg:p-8 flex justify-center items-start overflow-y-auto h-[calc(100vh-61px)]">
          
          {/* A4 PRINTABLE CANVAS */}
          <div 
            id="printable-cv-area"
            className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl p-10 text-gray-800 font-sans border border-gray-300 relative"
          >
            
            {/* CV HEADER */}
            <header className="border-b-2 pb-6 mb-6" style={{ borderColor: accentColor }}>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{personal.name}</h1>
              <p className="text-base font-bold mt-1" style={{ color: accentColor }}>{personal.title}</p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mt-3 font-medium">
                {personal.email && <span>📧 {personal.email}</span>}
                {personal.phone && <span>📞 {personal.phone}</span>}
                {personal.location && <span>📍 {personal.location}</span>}
                {personal.website && <span>🌐 {personal.website}</span>}
              </div>
            </header>

            {/* SUMMARY SECTION */}
            {personal.summary && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                  Professional Summary
                </h2>
                <p className="text-xs text-gray-700 leading-relaxed font-normal">{personal.summary}</p>
              </section>
            )}

            {/* EXPERIENCE SECTION */}
            {experience.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xs font-bold text-gray-900">{exp.role}</h3>
                        <span className="text-[11px] font-semibold text-gray-500">{exp.date}</span>
                      </div>
                      <p className="text-xs font-bold mt-0.5" style={{ color: accentColor }}>{exp.company}</p>
                      <p className="text-xs text-gray-700 mt-1 leading-normal">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* EDUCATION SECTION */}
            {education.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xs font-bold text-gray-900">{edu.degree}</h3>
                        <span className="text-[11px] font-semibold text-gray-500">{edu.date}</span>
                      </div>
                      <p className="text-xs font-semibold" style={{ color: accentColor }}>{edu.institution}</p>
                      {edu.details && <p className="text-xs text-gray-600 mt-0.5">{edu.details}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SKILLS SECTION */}
            {skills.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                  Skills & Technical Tools
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span 
                      key={skill.id} 
                      className="bg-slate-100 border border-slate-200 text-slate-800 px-2.5 py-1 rounded text-[11px] font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* LANGUAGES SECTION */}
            {languages.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                  Languages
                </h2>
                <div className="flex flex-wrap gap-4 text-xs text-gray-700 font-medium">
                  {languages.map((lang) => (
                    <span key={lang.id}>
                      <strong className="text-gray-900">{lang.name}:</strong> {lang.level}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* PROJECTS SECTION */}
            {projects.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accentColor }}>
                  Key Projects
                </h2>
                <div className="space-y-3">
                  {projects.map((proj) => (
                    <div key={proj.id}>
                      <h3 className="text-xs font-bold text-gray-900">
                        {proj.title} {proj.role && <span className="font-normal text-slate-500">({proj.role})</span>}
                      </h3>
                      <p className="text-xs text-gray-700 mt-0.5">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CERTIFICATIONS SECTION */}
            {certificates.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                  Certifications
                </h2>
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                  {certificates.map((cert) => (
                    <li key={cert.id}>
                      <strong className="text-gray-900">{cert.title}</strong> - {cert.issuer} ({cert.date})
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* DECLARATION SECTION */}
            {showDeclaration && customSection.content && (
              <section className="mt-8 border-t pt-4">
                <p className="text-[11px] text-gray-500 italic text-center">
                  "{customSection.content}"
                </p>
              </section>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
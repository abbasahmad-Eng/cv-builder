'use client';

import React, { useState } from 'react';

// --- DATA STRUCTURE TYPES ---
interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Skill {
  id: string;
  name: string;
  level: string;
}

interface Language {
  id: string;
  name: string;
  proficiency: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

interface Project {
  id: string;
  title: string;
  role: string;
  link: string;
  description: string;
}

interface Course {
  id: string;
  name: string;
  institution: string;
  completionDate: string;
}

interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

interface Organisation {
  id: string;
  orgName: string;
  role: string;
  duration: string;
}

interface Publication {
  id: string;
  title: string;
  publisher: string;
  date: string;
  link: string;
}

interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
}

interface GenericItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  details: string;
}

interface CustomSection {
  id: string;
  heading: string;
  items: GenericItem[];
}

export default function ResumeBuilder() {
  // --- TEMPLATE SELECTION (10 Templates) ---
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1);

  // --- SECTION TABS ---
  const [activeTab, setActiveTab] = useState<string>('personal');

  // --- FORM STATES ---
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Abbas Ahmad',
    jobTitle: 'Software Engineer & AI Enthusiast',
    email: 'abbas@example.com',
    phone: '+92 300 1234567',
    address: 'Islamabad, Pakistan',
    website: 'https://github.com',
    summary: 'Driven software engineer specializing in web application development, machine learning, and data analytics.',
  });

  const [educations, setEducations] = useState<Education[]>([
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      school: 'GIKI Institute',
      location: 'Topi, KPK',
      startDate: '2020',
      endDate: '2024',
      description: 'Graduated with Distinction. Focused on Machine Learning and Software Architecture.',
    },
  ]);

  const [experiences, setExperiences] = useState<WorkExperience[]>([
    {
      id: '1',
      role: 'Full Stack Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Islamabad',
      startDate: '2024',
      endDate: 'Present',
      description: 'Developing high-performance Next.js applications and integrating enterprise APIs.',
    },
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { id: '1', name: 'React / Next.js', level: 'Expert' },
    { id: '2', name: 'Python & Machine Learning', level: 'Advanced' },
    { id: '3', name: 'Tailwind CSS', level: 'Expert' },
  ]);

  const [languages, setLanguages] = useState<Language[]>([
    { id: '1', name: 'English', proficiency: 'Professional Working' },
    { id: '2', name: 'Pashto', proficiency: 'Native' },
  ]);

  const [certificates, setCertificates] = useState<Certificate[]>([
    { id: '1', title: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: '2025' },
  ]);

  const [interests, setInterests] = useState<string>('Artificial Intelligence, Open Source, Mechanical Engineering, Tech Blogging');

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'AI Resume Builder Platform',
      role: 'Lead Developer',
      link: 'https://github.com',
      description: 'Built a full-featured FlowCV clone using Next.js, Tailwind, and Vercel.',
    },
  ]);

  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Deep Learning Specialization', institution: 'Coursera / DeepLearning.AI', completionDate: '2024' },
  ]);

  const [awards, setAwards] = useState<Award[]>([
    { id: '1', title: 'Best Final Year Project', issuer: 'GIKI Computer Society', date: '2024' },
  ]);

  const [organisations, setOrganisations] = useState<Organisation[]>([
    { id: '1', orgName: 'IEEE Student Branch', role: 'Technical Lead', duration: '2022 - 2024' },
  ]);

  const [publications, setPublications] = useState<Publication[]>([
    { id: '1', title: 'Predictive Analytics in Modern Web Apps', publisher: 'IEEE Xplore', date: '2024', link: 'https://ieee.org' },
  ]);

  const [references, setReferences] = useState<Reference[]>([
    { id: '1', name: 'Dr. John Doe', title: 'Professor', company: 'GIKI', email: 'johndoe@giki.edu.pk', phone: '+92 300 0000000' },
  ]);

  const [declaration, setDeclaration] = useState<string>(
    'I hereby declare that all the information provided above is true and accurate to the best of my knowledge.'
  );

  // Custom Pre-Defined Sections
  const [researchProjects, setResearchProjects] = useState<GenericItem[]>([
    { id: '1', title: 'Neural Network Churn Model', subtitle: 'GIKI Lab', date: '2024', details: 'Researched prediction accuracy on banking datasets using Scikit-Learn.' },
  ]);

  const [teachingSkills, setTeachingSkills] = useState<GenericItem[]>([
    { id: '1', title: 'LMS Specialized Instructor', subtitle: 'Tally Marks Consultancy', date: '2025 - 2026', details: 'Trained enterprise users on custom learning management systems.' },
  ]);

  const [customSections, setCustomSections] = useState<CustomSection[]>([]);

  // --- HELPER HANDLERS ---
  const addCustomSection = () => {
    setCustomSections([
      ...customSections,
      { id: Date.now().toString(), heading: 'Custom Section Header', items: [] },
    ]);
  };

  const addCustomItem = (sectionId: string) => {
    setCustomSections(
      customSections.map((sec) => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            items: [
              ...sec.items,
              { id: Date.now().toString(), title: 'New Item', subtitle: 'Sub-title', date: '2026', details: 'Item details...' },
            ],
          };
        }
        return sec;
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      {/* HEADER */}
      <header className="bg-slate-900 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white font-black text-xl px-3 py-1 rounded-md">CV</div>
          <h1 className="text-xl font-bold tracking-wide">FlowCV Builder Studio</h1>
        </div>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <button
            onClick={() => window.print()}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2 rounded-lg transition shadow-md"
          >
            🖨️ Print / Save PDF
          </button>
        </div>
      </header>

      {/* TEMPLATE SELECTOR STRIP */}
      <div className="bg-white border-b px-6 py-3 flex items-center gap-3 overflow-x-auto shadow-inner">
        <span className="font-bold text-xs uppercase tracking-wider text-slate-500 whitespace-nowrap">
          Choose Layout (10 Templates):
        </span>
        {[
          { id: 1, name: '1. Modern Executive' },
          { id: 2, name: '2. Minimalist Clean' },
          { id: 3, name: '3. Sidebar Dark' },
          { id: 4, name: '4. Classic Academic' },
          { id: 5, name: '5. Creative Teal' },
          { id: 6, name: '6. Compact Grid' },
          { id: 7, name: '7. Elegant Serif' },
          { id: 8, name: '8. Tech Bordered' },
          { id: 9, name: '9. Warm Corporate' },
          { id: 10, name: '10. Bold Header' },
        ].map((tpl) => (
          <button
            key={tpl.id}
            onClick={() => setSelectedTemplate(tpl.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition ${
              selectedTemplate === tpl.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {tpl.name}
          </button>
        ))}
      </div>

      {/* MAIN TWO-COLUMN CONTAINER */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 max-w-[1600px] mx-auto w-full">
        {/* LEFT PANEL: EDITOR CONTROLS (5 Cols) */}
        <div className="lg:col-span-5 bg-white border rounded-xl shadow-sm flex flex-col h-[calc(100vh-140px)] sticky top-[120px]">
          {/* Section Navigation Tabs */}
          <div className="p-3 border-b bg-slate-50 flex gap-2 overflow-x-auto">
            {[
              { id: 'personal', name: 'Personal' },
              { id: 'education', name: 'Education' },
              { id: 'experience', name: 'Experience' },
              { id: 'skills', name: 'Skills' },
              { id: 'languages', name: 'Languages' },
              { id: 'certs', name: 'Certificates' },
              { id: 'projects', name: 'Projects' },
              { id: 'more', name: 'More Sections' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap ${
                  activeTab === tab.id ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border hover:bg-slate-100'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Form Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {/* PERSONAL INFO */}
            {activeTab === 'personal' && (
              <div className="space-y-4">
                <h2 className="font-bold text-lg text-slate-800 border-b pb-2">Personal Details</h2>
                <div>
                  <label className="text-xs font-bold text-slate-600">Full Name</label>
                  <input
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                    className="w-full p-2 border rounded-md text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600">Job Title</label>
                  <input
                    type="text"
                    value={personalInfo.jobTitle}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, jobTitle: e.target.value })}
                    className="w-full p-2 border rounded-md text-sm mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-600">Email</label>
                    <input
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-600">Phone</label>
                    <input
                      type="text"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-600">Location</label>
                    <input
                      type="text"
                      value={personalInfo.address}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-600">Website / Portfolio</label>
                    <input
                      type="text"
                      value={personalInfo.website}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, website: e.target.value })}
                      className="w-full p-2 border rounded-md text-sm mt-1"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600">Professional Summary</label>
                  <textarea
                    rows={4}
                    value={personalInfo.summary}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })}
                    className="w-full p-2 border rounded-md text-sm mt-1"
                  />
                </div>
              </div>
            )}

            {/* EDUCATION */}
            {activeTab === 'education' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h2 className="font-bold text-lg text-slate-800">Education</h2>
                  <button
                    onClick={() =>
                      setEducations([
                        ...educations,
                        { id: Date.now().toString(), degree: '', school: '', location: '', startDate: '', endDate: '', description: '' },
                      ])
                    }
                    className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700"
                  >
                    + Add Degree
                  </button>
                </div>
                {educations.map((edu, idx) => (
                  <div key={edu.id} className="p-4 border rounded-lg bg-slate-50 space-y-3 relative">
                    <button
                      onClick={() => setEducations(educations.filter((e) => e.id !== edu.id))}
                      className="absolute top-2 right-2 text-xs text-red-500 font-bold"
                    >
                      Delete
                    </button>
                    <input
                      type="text"
                      placeholder="Degree / Major"
                      value={edu.degree}
                      onChange={(e) =>
                        setEducations(educations.map((item) => (item.id === edu.id ? { ...item, degree: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="School / University"
                      value={edu.school}
                      onChange={(e) =>
                        setEducations(educations.map((item) => (item.id === edu.id ? { ...item, school: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Start Date"
                        value={edu.startDate}
                        onChange={(e) =>
                          setEducations(educations.map((item) => (item.id === edu.id ? { ...item, startDate: e.target.value } : item)))
                        }
                        className="p-2 border rounded-md text-sm"
                      />
                      <input
                        type="text"
                        placeholder="End Date"
                        value={edu.endDate}
                        onChange={(e) =>
                          setEducations(educations.map((item) => (item.id === edu.id ? { ...item, endDate: e.target.value } : item)))
                        }
                        className="p-2 border rounded-md text-sm"
                      />
                    </div>
                    <textarea
                      placeholder="Honors, thesis, exchange terms, or description..."
                      value={edu.description}
                      onChange={(e) =>
                        setEducations(educations.map((item) => (item.id === edu.id ? { ...item, description: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h2 className="font-bold text-lg text-slate-800">Professional Experience</h2>
                  <button
                    onClick={() =>
                      setExperiences([
                        ...experiences,
                        { id: Date.now().toString(), role: '', company: '', location: '', startDate: '', endDate: '', description: '' },
                      ])
                    }
                    className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700"
                  >
                    + Add Experience
                  </button>
                </div>
                {experiences.map((exp) => (
                  <div key={exp.id} className="p-4 border rounded-lg bg-slate-50 space-y-3 relative">
                    <button
                      onClick={() => setExperiences(experiences.filter((e) => e.id !== exp.id))}
                      className="absolute top-2 right-2 text-xs text-red-500 font-bold"
                    >
                      Delete
                    </button>
                    <input
                      type="text"
                      placeholder="Job Title / Role"
                      value={exp.role}
                      onChange={(e) =>
                        setExperiences(experiences.map((item) => (item.id === exp.id ? { ...item, role: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Company / Organization"
                      value={exp.company}
                      onChange={(e) =>
                        setExperiences(experiences.map((item) => (item.id === exp.id ? { ...item, company: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Start Date"
                        value={exp.startDate}
                        onChange={(e) =>
                          setExperiences(experiences.map((item) => (item.id === exp.id ? { ...item, startDate: e.target.value } : item)))
                        }
                        className="p-2 border rounded-md text-sm"
                      />
                      <input
                        type="text"
                        placeholder="End Date"
                        value={exp.endDate}
                        onChange={(e) =>
                          setExperiences(experiences.map((item) => (item.id === exp.id ? { ...item, endDate: e.target.value } : item)))
                        }
                        className="p-2 border rounded-md text-sm"
                      />
                    </div>
                    <textarea
                      placeholder="Responsibilities & Key Impact..."
                      value={exp.description}
                      onChange={(e) =>
                        setExperiences(experiences.map((item) => (item.id === exp.id ? { ...item, description: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* SKILLS */}
            {activeTab === 'skills' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h2 className="font-bold text-lg text-slate-800">Skills</h2>
                  <button
                    onClick={() => setSkills([...skills, { id: Date.now().toString(), name: '', level: 'Intermediate' }])}
                    className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-md"
                  >
                    + Add Skill
                  </button>
                </div>
                {skills.map((s) => (
                  <div key={s.id} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Skill Name (e.g. Python, Leadership)"
                      value={s.name}
                      onChange={(e) =>
                        setSkills(skills.map((item) => (item.id === s.id ? { ...item, name: e.target.value } : item)))
                      }
                      className="flex-1 p-2 border rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Level"
                      value={s.level}
                      onChange={(e) =>
                        setSkills(skills.map((item) => (item.id === s.id ? { ...item, level: e.target.value } : item)))
                      }
                      className="w-28 p-2 border rounded-md text-sm"
                    />
                    <button onClick={() => setSkills(skills.filter((item) => item.id !== s.id))} className="text-red-500 font-bold">
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* LANGUAGES */}
            {activeTab === 'languages' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h2 className="font-bold text-lg text-slate-800">Languages</h2>
                  <button
                    onClick={() => setLanguages([...languages, { id: Date.now().toString(), name: '', proficiency: 'Fluent' }])}
                    className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-md"
                  >
                    + Add Language
                  </button>
                </div>
                {languages.map((l) => (
                  <div key={l.id} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Language Name"
                      value={l.name}
                      onChange={(e) =>
                        setLanguages(languages.map((item) => (item.id === l.id ? { ...item, name: e.target.value } : item)))
                      }
                      className="flex-1 p-2 border rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Proficiency"
                      value={l.proficiency}
                      onChange={(e) =>
                        setLanguages(languages.map((item) => (item.id === l.id ? { ...item, proficiency: e.target.value } : item)))
                      }
                      className="w-32 p-2 border rounded-md text-sm"
                    />
                    <button onClick={() => setLanguages(languages.filter((item) => item.id !== l.id))} className="text-red-500 font-bold">
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* CERTIFICATES */}
            {activeTab === 'certs' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h2 className="font-bold text-lg text-slate-800">Certificates</h2>
                  <button
                    onClick={() => setCertificates([...certificates, { id: Date.now().toString(), title: '', issuer: '', date: '' }])}
                    className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-md"
                  >
                    + Add Certificate
                  </button>
                </div>
                {certificates.map((c) => (
                  <div key={c.id} className="p-3 border rounded-md bg-slate-50 space-y-2 relative">
                    <button
                      onClick={() => setCertificates(certificates.filter((item) => item.id !== c.id))}
                      className="absolute top-2 right-2 text-xs text-red-500 font-bold"
                    >
                      Delete
                    </button>
                    <input
                      type="text"
                      placeholder="Certificate Title"
                      value={c.title}
                      onChange={(e) =>
                        setCertificates(certificates.map((item) => (item.id === c.id ? { ...item, title: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Issuing Organization"
                      value={c.issuer}
                      onChange={(e) =>
                        setCertificates(certificates.map((item) => (item.id === c.id ? { ...item, issuer: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Date Earned"
                      value={c.date}
                      onChange={(e) =>
                        setCertificates(certificates.map((item) => (item.id === c.id ? { ...item, date: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h2 className="font-bold text-lg text-slate-800">Projects</h2>
                  <button
                    onClick={() =>
                      setProjects([...projects, { id: Date.now().toString(), title: '', role: '', link: '', description: '' }])
                    }
                    className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-md"
                  >
                    + Add Project
                  </button>
                </div>
                {projects.map((p) => (
                  <div key={p.id} className="p-3 border rounded-md bg-slate-50 space-y-2 relative">
                    <button
                      onClick={() => setProjects(projects.filter((item) => item.id !== p.id))}
                      className="absolute top-2 right-2 text-xs text-red-500 font-bold"
                    >
                      Delete
                    </button>
                    <input
                      type="text"
                      placeholder="Project Title"
                      value={p.title}
                      onChange={(e) =>
                        setProjects(projects.map((item) => (item.id === p.id ? { ...item, title: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Your Role"
                      value={p.role}
                      onChange={(e) => setProjects(projects.map((item) => (item.id === p.id ? { ...item, role: e.target.value } : item)))}
                      className="w-full p-2 border rounded-md text-sm"
                    />
                    <textarea
                      placeholder="Highlights, impact, and challenges solved..."
                      value={p.description}
                      onChange={(e) =>
                        setProjects(projects.map((item) => (item.id === p.id ? { ...item, description: e.target.value } : item)))
                      }
                      className="w-full p-2 border rounded-md text-sm"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* MORE SECTIONS */}
            {activeTab === 'more' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-bold text-slate-800 border-b pb-1">Interests</h2>
                  <textarea
                    rows={2}
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="w-full p-2 border rounded-md text-sm mt-2"
                  />
                </div>

                <div>
                  <h2 className="font-bold text-slate-800 border-b pb-1">Declaration</h2>
                  <textarea
                    rows={2}
                    value={declaration}
                    onChange={(e) => setDeclaration(e.target.value)}
                    className="w-full p-2 border rounded-md text-sm mt-2"
                  />
                </div>

                <div className="border-t pt-4">
                  <button onClick={addCustomSection} className="w-full py-2 bg-slate-800 text-white font-bold text-xs rounded-md">
                    + Add Custom Section
                  </button>
                  {customSections.map((sec) => (
                    <div key={sec.id} className="mt-4 p-3 border rounded-md bg-indigo-50/50 space-y-3">
                      <input
                        type="text"
                        value={sec.heading}
                        onChange={(e) =>
                          setCustomSections(
                            customSections.map((s) => (s.id === sec.id ? { ...s, heading: e.target.value } : s))
                          )
                        }
                        className="w-full font-bold p-1 border rounded text-sm"
                      />
                      <button onClick={() => addCustomItem(sec.id)} className="text-xs bg-indigo-600 text-white px-2 py-1 rounded">
                        + Add Item
                      </button>
                      {sec.items.map((item) => (
                        <div key={item.id} className="p-2 border rounded bg-white text-xs space-y-1">
                          <input
                            type="text"
                            placeholder="Title"
                            value={item.title}
                            onChange={(e) =>
                              setCustomSections(
                                customSections.map((s) =>
                                  s.id === sec.id
                                    ? {
                                        ...s,
                                        items: s.items.map((i) => (i.id === item.id ? { ...i, title: e.target.value } : i)),
                                      }
                                    : s
                                )
                              )
                            }
                            className="w-full border p-1 rounded"
                          />
                          <textarea
                            placeholder="Details"
                            value={item.details}
                            onChange={(e) =>
                              setCustomSections(
                                customSections.map((s) =>
                                  s.id === sec.id
                                    ? {
                                        ...s,
                                        items: s.items.map((i) => (i.id === item.id ? { ...i, details: e.target.value } : i)),
                                      }
                                    : s
                                )
                              )
                            }
                            className="w-full border p-1 rounded"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: LIVE RESUME PREVIEW (7 Cols) */}
        <div className="lg:col-span-7 bg-white border shadow-2xl rounded-xl p-8 min-h-[1000px] print:shadow-none print:border-none print:p-0 print:m-0">
          {/* TEMPLATE RENDER ENGINE */}
          <ResumePreviewTemplate
            templateId={selectedTemplate}
            personalInfo={personalInfo}
            educations={educations}
            experiences={experiences}
            skills={skills}
            languages={languages}
            certificates={certificates}
            interests={interests}
            projects={projects}
            courses={courses}
            awards={awards}
            organisations={organisations}
            publications={publications}
            references={references}
            declaration={declaration}
            researchProjects={researchProjects}
            teachingSkills={teachingSkills}
            customSections={customSections}
          />
        </div>
      </div>
    </div>
  );
}

// --- UNIVERSAL RESUME PREVIEW COMPONENT ---
function ResumePreviewTemplate(props: any) {
  const {
    templateId,
    personalInfo,
    educations,
    experiences,
    skills,
    languages,
    certificates,
    interests,
    projects,
    courses,
    awards,
    organisations,
    publications,
    references,
    declaration,
    researchProjects,
    teachingSkills,
    customSections,
  } = props;

  // TEMPLATE 3: Sidebar Dark
  if (templateId === 3) {
    return (
      <div className="grid grid-cols-12 min-h-[900px] text-slate-800">
        <div className="col-span-4 bg-slate-900 text-white p-6 space-y-6 rounded-l-lg">
          <div>
            <h1 className="text-2xl font-black">{personalInfo.fullName}</h1>
            <p className="text-indigo-400 text-sm font-medium mt-1">{personalInfo.jobTitle}</p>
          </div>
          <div className="text-xs space-y-1 text-slate-300 border-t border-slate-700 pt-4">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.address}</p>
          </div>
          {skills.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 border-b border-slate-700 pb-1">Skills</h3>
              {skills.map((s: any) => (
                <div key={s.id} className="text-xs mb-1">
                  <span className="font-semibold">{s.name}</span> <span className="text-slate-400">({s.level})</span>
                </div>
              ))}
            </div>
          )}
          {languages.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 border-b border-slate-700 pb-1">
                Languages
              </h3>
              {languages.map((l: any) => (
                <div key={l.id} className="text-xs mb-1">
                  {l.name} - <span className="text-slate-400">{l.proficiency}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-8 p-6 space-y-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b pb-1 mb-2">Summary</h2>
            <p className="text-xs leading-relaxed text-slate-700">{personalInfo.summary}</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b pb-1 mb-3">Experience</h2>
            {experiences.map((exp: any) => (
              <div key={exp.id} className="mb-3 text-xs">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>{exp.role}</span>
                  <span className="text-slate-500">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-indigo-600 font-medium">{exp.company}</p>
                <p className="text-slate-600 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b pb-1 mb-3">Education</h2>
            {educations.map((edu: any) => (
              <div key={edu.id} className="mb-2 text-xs">
                <div className="flex justify-between font-bold">
                  <span>{edu.degree}</span>
                  <span className="text-slate-500">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-slate-600">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT / TEMPLATE 1: Modern Executive
  return (
    <div className={`space-y-6 ${templateId === 7 ? 'font-serif' : 'font-sans'}`}>
      {/* HEADER SECTION */}
      <div className={`pb-4 border-b-2 ${templateId === 5 ? 'border-teal-500 text-teal-900' : 'border-indigo-600'}`}>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{personalInfo.fullName}</h1>
        <p className="text-lg font-semibold text-indigo-600 mt-1">{personalInfo.jobTitle}</p>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-3 font-medium">
          {personalInfo.email && <span>📧 {personalInfo.email}</span>}
          {personalInfo.phone && <span>📞 {personalInfo.phone}</span>}
          {personalInfo.address && <span>📍 {personalInfo.address}</span>}
          {personalInfo.website && <span>🌐 {personalInfo.website}</span>}
        </div>
      </div>

      {/* SUMMARY */}
      {personalInfo.summary && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Professional Summary</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* WORK EXPERIENCE */}
      {experiences.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 border-b pb-1">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experiences.map((exp: any) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-800 text-sm">{exp.role}</h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-xs font-semibold text-indigo-600">{exp.company}</p>
                <p className="text-xs text-slate-600 mt-1 leading-normal">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EDUCATION */}
      {educations.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 border-b pb-1">Education</h2>
          <div className="space-y-3">
            {educations.map((edu: any) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-800 text-sm">{edu.degree}</h3>
                  <span className="text-xs text-slate-500">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-600">{edu.school}</p>
                {edu.description && <p className="text-xs text-slate-500 mt-0.5">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SKILLS & LANGUAGES GRID */}
      <div className="grid grid-cols-2 gap-6">
        {skills.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 border-b pb-1">Skills</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s: any) => (
                <span key={s.id} className="text-xs bg-slate-100 px-2 py-1 rounded font-medium text-slate-700 border">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {languages.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 border-b pb-1">Languages</h2>
            <div className="space-y-1">
              {languages.map((l: any) => (
                <p key={l.id} className="text-xs text-slate-700">
                  <span className="font-semibold">{l.name}:</span> {l.proficiency}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PROJECTS */}
      {projects.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 border-b pb-1">Key Projects</h2>
          <div className="space-y-2">
            {projects.map((p: any) => (
              <div key={p.id}>
                <h3 className="font-bold text-slate-800 text-xs">{p.title}</h3>
                <p className="text-xs text-slate-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CUSTOM SECTIONS */}
      {customSections.map((sec: any) => (
        <div key={sec.id}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 border-b pb-1">{sec.heading}</h2>
          {sec.items.map((item: any) => (
            <div key={item.id} className="mb-2">
              <h3 className="font-bold text-xs text-slate-800">{item.title}</h3>
              <p className="text-xs text-slate-600">{item.details}</p>
            </div>
          ))}
        </div>
      ))}

      {/* DECLARATION */}
      {declaration && (
        <div className="pt-4 border-t text-slate-500 italic text-xs">
          <p>{declaration}</p>
        </div>
      )}
    </div>
  );
}
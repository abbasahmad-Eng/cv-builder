"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type Personal = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
};
type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string;
};
type Education = {
  id: string;
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  description: string;
};
type Skill = { id: string; name: string };
type Language = { id: string; name: string; level: string };
type Project = { id: string; name: string; link: string; description: string };

type ResumeData = {
  personal: Personal;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
};

/* ------------------------------------------------------------------ */
/* Helpers & initial data                                              */
/* ------------------------------------------------------------------ */

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

const A4_W = 794; // px at 96dpi
const A4_H = 1123;

const INITIAL: ResumeData = {
  personal: {
    fullName: "Amina Rahman",
    jobTitle: "Frontend Engineer",
    email: "amina@example.com",
    phone: "+92 300 1234567",
    location: "Islamabad, Pakistan",
    website: "aminarahman.dev",
    summary:
      "Frontend engineer with 5 years of experience building fast, accessible web applications with React and TypeScript. Focused on clean design systems and measurable performance gains.",
  },
  experience: [
    {
      id: "e1",
      role: "Senior Frontend Engineer",
      company: "Northwind Labs",
      location: "Remote",
      start: "2022",
      end: "Present",
      description:
        "Led migration of a 200-page app to Next.js, cutting load time by 45%\nBuilt a shared component library used by 6 product teams\nMentored 4 junior engineers",
    },
    {
      id: "e2",
      role: "Web Developer",
      company: "Brightside Studio",
      location: "Lahore",
      start: "2019",
      end: "2022",
      description:
        "Delivered 20+ client websites with React and Tailwind CSS\nImproved Lighthouse accessibility scores from 72 to 98",
    },
  ],
  education: [
    {
      id: "d1",
      degree: "BSc Computer Science",
      school: "COMSATS University",
      location: "Islamabad",
      start: "2015",
      end: "2019",
      description: "",
    },
  ],
  skills: [
    { id: "s1", name: "React" },
    { id: "s2", name: "TypeScript" },
    { id: "s3", name: "Next.js" },
    { id: "s4", name: "Tailwind CSS" },
    { id: "s5", name: "Node.js" },
  ],
  languages: [
    { id: "l1", name: "English", level: "Fluent" },
    { id: "l2", name: "Urdu", level: "Native" },
  ],
  projects: [
    {
      id: "p1",
      name: "OpenInvoice",
      link: "github.com/amina/openinvoice",
      description: "Open-source invoicing app with PDF export and multi-currency support.",
    },
  ],
};

const TABS = [
  "Personal Details",
  "Experience",
  "Education",
  "Skills",
  "Languages",
  "Projects",
] as const;
type Tab = (typeof TABS)[number];

const SWATCHES = ["#2563eb", "#0f766e", "#7c3aed", "#be123c", "#c2410c", "#111827"];

/** Generic list state helper: add / update / remove items that have an id. */
function useList<T extends { id: string }>(
  setData: React.Dispatch<React.SetStateAction<ResumeData>>,
  key: "experience" | "education" | "skills" | "languages" | "projects",
  blank: () => T
) {
  const add = () =>
    setData((d) => ({ ...d, [key]: [...(d[key] as unknown as T[]), blank()] }));
  const update = (id: string, patch: Partial<T>) =>
    setData((d) => ({
      ...d,
      [key]: (d[key] as unknown as T[]).map((i) => (i.id === id ? { ...i, ...patch } : i)),
    }));
  const remove = (id: string) =>
    setData((d) => ({
      ...d,
      [key]: (d[key] as unknown as T[]).filter((i) => i.id !== id),
    }));
  return { add, update, remove };
}

/* ------------------------------------------------------------------ */
/* Resume sheet                                                        */
/*                                                                     */
/* IMPORTANT: this component uses ONLY inline styles with hex/rgb      */
/* colors. That keeps the PDF capture reliable (no CSS variables,      */
/* no oklch() colors from Tailwind v4) and keeps print output exact.   */
/* ------------------------------------------------------------------ */

const INK = "#1f2937";
const MUTED = "#6b7280";

function bullets(text: string) {
  return text
    .split("\n")
    .map((l) => l.replace(/^\s*[-•*]\s*/, "").trim())
    .filter(Boolean);
}

function SectionTitle({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div style={{ marginTop: 22, marginBottom: 10 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: accent,
          paddingBottom: 5,
          borderBottom: `1.5px solid ${accent}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function BulletList({ text }: { text: string }) {
  const items = bullets(text);
  if (!items.length) return null;
  return (
    <ul style={{ margin: "5px 0 0 0", paddingLeft: 18, listStyleType: "disc" }}>
      {items.map((b, i) => (
        <li key={i} style={{ fontSize: 12.5, lineHeight: 1.5, color: INK, marginBottom: 2 }}>
          {b}
        </li>
      ))}
    </ul>
  );
}

function dateRange(start: string, end: string) {
  return [start, end].filter((x) => x.trim()).join(" – ");
}

function ResumeSheet({ data, accent }: { data: ResumeData; accent: string }) {
  const p = data.personal;
  const contact = [p.email, p.phone, p.location, p.website].filter((x) => x.trim());

  const experience = data.experience.filter((e) => e.role || e.company || e.description);
  const education = data.education.filter((e) => e.degree || e.school || e.description);
  const skills = data.skills.filter((s) => s.name.trim());
  const languages = data.languages.filter((l) => l.name.trim());
  const projects = data.projects.filter((x) => x.name || x.description);

  return (
    <div
      style={{
        width: A4_W,
        minHeight: A4_H,
        boxSizing: "border-box",
        padding: "48px 52px",
        backgroundColor: "#ffffff",
        color: INK,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 12.5,
        lineHeight: 1.45,
      }}
    >
      {/* Header */}
      <div style={{ borderLeft: `6px solid ${accent}`, paddingLeft: 16 }}>
        <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.1, color: "#111827" }}>
          {p.fullName || "Your Name"}
        </div>
        {p.jobTitle && (
          <div style={{ fontSize: 16, color: accent, marginTop: 6, fontWeight: 600 }}>
            {p.jobTitle}
          </div>
        )}
        {contact.length > 0 && (
          <div style={{ fontSize: 12, color: MUTED, marginTop: 8 }}>{contact.join("   |   ")}</div>
        )}
      </div>

      {p.summary.trim() && (
        <>
          <SectionTitle accent={accent}>Profile</SectionTitle>
          <div style={{ fontSize: 12.5, lineHeight: 1.55 }}>{p.summary}</div>
        </>
      )}

      {experience.length > 0 && (
        <>
          <SectionTitle accent={accent}>Experience</SectionTitle>
          {experience.map((e) => (
            <div key={e.id} style={{ marginBottom: 12, pageBreakInside: "avoid" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5 }}>{e.role}</div>
                <div style={{ color: MUTED, fontSize: 12, whiteSpace: "nowrap" }}>
                  {dateRange(e.start, e.end)}
                </div>
              </div>
              {(e.company || e.location) && (
                <div style={{ color: MUTED, fontSize: 12.5 }}>
                  {[e.company, e.location].filter((x) => x.trim()).join(", ")}
                </div>
              )}
              <BulletList text={e.description} />
            </div>
          ))}
        </>
      )}

      {education.length > 0 && (
        <>
          <SectionTitle accent={accent}>Education</SectionTitle>
          {education.map((e) => (
            <div key={e.id} style={{ marginBottom: 12, pageBreakInside: "avoid" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5 }}>{e.degree}</div>
                <div style={{ color: MUTED, fontSize: 12, whiteSpace: "nowrap" }}>
                  {dateRange(e.start, e.end)}
                </div>
              </div>
              {(e.school || e.location) && (
                <div style={{ color: MUTED, fontSize: 12.5 }}>
                  {[e.school, e.location].filter((x) => x.trim()).join(", ")}
                </div>
              )}
              <BulletList text={e.description} />
            </div>
          ))}
        </>
      )}

      {projects.length > 0 && (
        <>
          <SectionTitle accent={accent}>Projects</SectionTitle>
          {projects.map((x) => (
            <div key={x.id} style={{ marginBottom: 10, pageBreakInside: "avoid" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5 }}>{x.name}</div>
                {x.link && <div style={{ color: accent, fontSize: 12 }}>{x.link}</div>}
              </div>
              {x.description.trim() && (
                <div style={{ fontSize: 12.5, marginTop: 2, lineHeight: 1.5 }}>{x.description}</div>
              )}
            </div>
          ))}
        </>
      )}

      {skills.length > 0 && (
        <>
          <SectionTitle accent={accent}>Skills</SectionTitle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {skills.map((s) => (
              <span
                key={s.id}
                style={{
                  fontSize: 12,
                  padding: "3px 10px",
                  borderRadius: 4,
                  border: `1px solid ${accent}`,
                  color: INK,
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </>
      )}

      {languages.length > 0 && (
        <>
          <SectionTitle accent={accent}>Languages</SectionTitle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 28px" }}>
            {languages.map((l) => (
              <div key={l.id} style={{ fontSize: 12.5 }}>
                <span style={{ fontWeight: 700 }}>{l.name}</span>
                {l.level && <span style={{ color: MUTED }}> — {l.level}</span>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small form primitives                                               */
/* ------------------------------------------------------------------ */

const inputCls =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-medium text-slate-600">{label}</span>
      {children}
    </label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputCls} />;
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={4} {...props} className={`${inputCls} resize-y`} />;
}

function Card({
  title,
  onDelete,
  children,
}: {
  title: string;
  onDelete: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="truncate text-sm font-semibold text-slate-800">{title}</div>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-md px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">{children}</div>
    </div>
  );
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-lg border border-dashed border-slate-400 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-50"
    >
      + {label}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Page() {
  const [data, setData] = useState<ResumeData>(INITIAL);
  const [accent, setAccent] = useState("#2563eb");
  const [tab, setTab] = useState<Tab>("Personal Details");
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const exp = useList<Experience>(setData, "experience", () => ({
    id: uid(), role: "", company: "", location: "", start: "", end: "", description: "",
  }));
  const edu = useList<Education>(setData, "education", () => ({
    id: uid(), degree: "", school: "", location: "", start: "", end: "", description: "",
  }));
  const skl = useList<Skill>(setData, "skills", () => ({ id: uid(), name: "" }));
  const lng = useList<Language>(setData, "languages", () => ({ id: uid(), name: "", level: "" }));
  const prj = useList<Project>(setData, "projects", () => ({
    id: uid(), name: "", link: "", description: "",
  }));

  const setPersonal = (patch: Partial<Personal>) =>
    setData((d) => ({ ...d, personal: { ...d.personal, ...patch } }));

  /* ---- Live preview scaling ---- */
  const previewBox = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.8);
  const [sheetH, setSheetH] = useState(A4_H);

  useEffect(() => {
    const box = previewBox.current;
    const sheet = sheetRef.current;
    if (!box || !sheet) return;
    const measure = () => {
      setScale(Math.min(1, Math.max(0.3, (box.clientWidth - 40) / A4_W)));
      setSheetH(sheet.offsetHeight || A4_H);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    ro.observe(sheet);
    return () => ro.disconnect();
  }, []);

  /* ---- Export: real PDF file (rendered from an isolated off-screen copy) ---- */
  const downloadPdf = useCallback(async () => {
    setError(null);
    setExporting(true);
    try {
      const el = document.getElementById("resume-export");
      if (!el) throw new Error("Resume element not found.");

      if (document.fonts?.ready) await document.fonts.ready;

      // Dynamic imports keep these browser-only libs out of the server bundle.
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas-pro"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(el as HTMLElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: A4_W,
        windowWidth: A4_W,
        scrollX: 0,
        scrollY: 0,
        onclone: (doc) => {
          const c = doc.getElementById("resume-export");
          if (c) {
            c.style.position = "static";
            c.style.left = "0";
            c.style.top = "0";
          }
        },
      });

      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait", compress: true });
      const pageW = pdf.internal.pageSize.getWidth(); // 210
      const pageH = pdf.internal.pageSize.getHeight(); // 297
      const img = canvas.toDataURL("image/jpeg", 0.95);

      let imgW = pageW;
      let imgH = (canvas.height * pageW) / canvas.width;

      if (imgH <= pageH * 1.03) {
        // Fits (or is within 3%): force a clean single page.
        if (imgH > pageH) {
          const k = pageH / imgH;
          imgW *= k;
          imgH = pageH;
        }
        pdf.addImage(img, "JPEG", (pageW - imgW) / 2, 0, imgW, imgH);
      } else {
        // Longer content: slice across additional A4 pages.
        const pages = Math.ceil(imgH / pageH);
        for (let i = 0; i < pages; i++) {
          if (i > 0) pdf.addPage();
          pdf.addImage(img, "JPEG", 0, -i * pageH, imgW, imgH);
        }
      }

      const name = (data.personal.fullName || "resume").trim().replace(/[^\w\-]+/g, "_");
      pdf.save(`${name}_Resume.pdf`);
    } catch (e) {
      console.error(e);
      setError("PDF export failed. Please try again, or use “Print” instead.");
    } finally {
      setExporting(false);
    }
  }, [data.personal.fullName]);

  /* ---- Export: browser print (vector text). Only #resume-export is printed. ---- */
  const printResume = useCallback(() => {
    const prev = document.title;
    document.title = `${data.personal.fullName || "Resume"} - Resume`;
    const restore = () => {
      document.title = prev;
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);
    window.print();
  }, [data.personal.fullName]);

  /* ---------------------------------------------------------------- */

  return (
    <>
      {/* Print isolation: hide the whole editor UI, show only the resume. */}
      <style>{`
        @page { size: A4; margin: 0; }
        @media print {
          html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; }
          .app-ui { display: none !important; }
          #resume-export {
            position: static !important;
            left: 0 !important;
            top: 0 !important;
            width: 210mm !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

      {/* ============================ APP UI ============================ */}
      <div className="app-ui flex h-screen flex-col bg-slate-100 text-slate-900">
        {/* Top bar */}
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-5 py-3">
          <div className="text-base font-semibold">Resume Builder</div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-600">Accent</span>
              {SWATCHES.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-label={`Use accent ${c}`}
                  onClick={() => setAccent(c)}
                  className="h-6 w-6 rounded-full border-2"
                  style={{
                    backgroundColor: c,
                    borderColor: accent.toLowerCase() === c ? "#0f172a" : "#ffffff",
                    boxShadow: "0 0 0 1px #cbd5e1",
                  }}
                />
              ))}
              <input
                type="color"
                aria-label="Custom accent color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                className="h-7 w-9 cursor-pointer rounded border border-slate-300 bg-white p-0.5"
              />
            </div>
            <button
              type="button"
              onClick={printResume}
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Print
            </button>
            <button
              type="button"
              onClick={downloadPdf}
              disabled={exporting}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:opacity-60"
            >
              {exporting ? "Preparing PDF…" : "Download PDF"}
            </button>
          </div>
        </header>

        {error && (
          <div className="border-b border-red-200 bg-red-50 px-5 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Split screen */}
        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          {/* ------------ Editor ------------ */}
          <section className="flex min-h-0 w-full flex-col border-slate-200 bg-white lg:w-[46%] lg:border-r">
            <nav className="flex gap-1 overflow-x-auto border-b border-slate-200 px-3 pt-2">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`whitespace-nowrap rounded-t-md px-3 py-2 text-sm font-medium ${
                    tab === t
                      ? "border-b-2 border-slate-900 text-slate-900"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {t}
                </button>
              ))}
            </nav>

            <div className="min-h-0 flex-1 overflow-y-auto p-5">
              {tab === "Personal Details" && (
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Full name">
                    <TextInput
                      value={data.personal.fullName}
                      onChange={(e) => setPersonal({ fullName: e.target.value })}
                    />
                  </Field>
                  <Field label="Job title">
                    <TextInput
                      value={data.personal.jobTitle}
                      onChange={(e) => setPersonal({ jobTitle: e.target.value })}
                    />
                  </Field>
                  <Field label="Email">
                    <TextInput
                      type="email"
                      value={data.personal.email}
                      onChange={(e) => setPersonal({ email: e.target.value })}
                    />
                  </Field>
                  <Field label="Phone">
                    <TextInput
                      value={data.personal.phone}
                      onChange={(e) => setPersonal({ phone: e.target.value })}
                    />
                  </Field>
                  <Field label="Location">
                    <TextInput
                      value={data.personal.location}
                      onChange={(e) => setPersonal({ location: e.target.value })}
                    />
                  </Field>
                  <Field label="Website / LinkedIn">
                    <TextInput
                      value={data.personal.website}
                      onChange={(e) => setPersonal({ website: e.target.value })}
                    />
                  </Field>
                  <Field label="Professional summary" className="col-span-2">
                    <TextArea
                      rows={6}
                      value={data.personal.summary}
                      onChange={(e) => setPersonal({ summary: e.target.value })}
                    />
                  </Field>
                </div>
              )}

              {tab === "Experience" && (
                <>
                  {data.experience.map((x) => (
                    <Card key={x.id} title={x.role || x.company || "New experience"} onDelete={() => exp.remove(x.id)}>
                      <Field label="Job title">
                        <TextInput value={x.role} onChange={(e) => exp.update(x.id, { role: e.target.value })} />
                      </Field>
                      <Field label="Company">
                        <TextInput value={x.company} onChange={(e) => exp.update(x.id, { company: e.target.value })} />
                      </Field>
                      <Field label="Start date">
                        <TextInput value={x.start} placeholder="2021" onChange={(e) => exp.update(x.id, { start: e.target.value })} />
                      </Field>
                      <Field label="End date">
                        <TextInput value={x.end} placeholder="Present" onChange={(e) => exp.update(x.id, { end: e.target.value })} />
                      </Field>
                      <Field label="Location" className="col-span-2">
                        <TextInput value={x.location} onChange={(e) => exp.update(x.id, { location: e.target.value })} />
                      </Field>
                      <Field label="Description (one bullet per line)" className="col-span-2">
                        <TextArea value={x.description} onChange={(e) => exp.update(x.id, { description: e.target.value })} />
                      </Field>
                    </Card>
                  ))}
                  <AddButton onClick={exp.add} label="Add experience" />
                </>
              )}

              {tab === "Education" && (
                <>
                  {data.education.map((x) => (
                    <Card key={x.id} title={x.degree || x.school || "New education"} onDelete={() => edu.remove(x.id)}>
                      <Field label="Degree">
                        <TextInput value={x.degree} onChange={(e) => edu.update(x.id, { degree: e.target.value })} />
                      </Field>
                      <Field label="School">
                        <TextInput value={x.school} onChange={(e) => edu.update(x.id, { school: e.target.value })} />
                      </Field>
                      <Field label="Start date">
                        <TextInput value={x.start} onChange={(e) => edu.update(x.id, { start: e.target.value })} />
                      </Field>
                      <Field label="End date">
                        <TextInput value={x.end} onChange={(e) => edu.update(x.id, { end: e.target.value })} />
                      </Field>
                      <Field label="Location" className="col-span-2">
                        <TextInput value={x.location} onChange={(e) => edu.update(x.id, { location: e.target.value })} />
                      </Field>
                      <Field label="Details (one bullet per line)" className="col-span-2">
                        <TextArea rows={3} value={x.description} onChange={(e) => edu.update(x.id, { description: e.target.value })} />
                      </Field>
                    </Card>
                  ))}
                  <AddButton onClick={edu.add} label="Add education" />
                </>
              )}

              {tab === "Skills" && (
                <>
                  <div className="mb-4 space-y-2">
                    {data.skills.map((s) => (
                      <div key={s.id} className="flex items-center gap-2">
                        <TextInput
                          value={s.name}
                          placeholder="e.g. React"
                          onChange={(e) => skl.update(s.id, { name: e.target.value })}
                        />
                        <button
                          type="button"
                          onClick={() => skl.remove(s.id)}
                          className="rounded-md px-2 py-2 text-xs font-medium text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                  <AddButton onClick={skl.add} label="Add skill" />
                </>
              )}

              {tab === "Languages" && (
                <>
                  {data.languages.map((l) => (
                    <Card key={l.id} title={l.name || "New language"} onDelete={() => lng.remove(l.id)}>
                      <Field label="Language">
                        <TextInput value={l.name} onChange={(e) => lng.update(l.id, { name: e.target.value })} />
                      </Field>
                      <Field label="Level">
                        <TextInput value={l.level} placeholder="Fluent" onChange={(e) => lng.update(l.id, { level: e.target.value })} />
                      </Field>
                    </Card>
                  ))}
                  <AddButton onClick={lng.add} label="Add language" />
                </>
              )}

              {tab === "Projects" && (
                <>
                  {data.projects.map((x) => (
                    <Card key={x.id} title={x.name || "New project"} onDelete={() => prj.remove(x.id)}>
                      <Field label="Project name">
                        <TextInput value={x.name} onChange={(e) => prj.update(x.id, { name: e.target.value })} />
                      </Field>
                      <Field label="Link">
                        <TextInput value={x.link} onChange={(e) => prj.update(x.id, { link: e.target.value })} />
                      </Field>
                      <Field label="Description" className="col-span-2">
                        <TextArea rows={3} value={x.description} onChange={(e) => prj.update(x.id, { description: e.target.value })} />
                      </Field>
                    </Card>
                  ))}
                  <AddButton onClick={prj.add} label="Add project" />
                </>
              )}
            </div>
          </section>

          {/* ------------ Live preview ------------ */}
          <section
            ref={previewBox}
            className="min-h-0 w-full flex-1 overflow-auto bg-slate-200 p-5 lg:w-[54%]"
          >
            <div
              className="mx-auto shadow-xl"
              style={{ width: A4_W * scale, height: sheetH * scale }}
            >
              <div
                ref={sheetRef}
                style={{
                  width: A4_W,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              >
                <ResumeSheet data={data} accent={accent} />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ================= Isolated export copy (off-screen) =================
          This is the ONLY thing captured for the PDF and the ONLY thing shown
          when printing. It has no editor, header, or form inputs in it. */}
      <div
        id="resume-export"
        aria-hidden="true"
        style={{
          position: "fixed",
          left: -10000,
          top: 0,
          width: A4_W,
          backgroundColor: "#ffffff",
          pointerEvents: "none",
        }}
      >
        <ResumeSheet data={data} accent={accent} />
      </div>
    </>
  );
}
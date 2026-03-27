"use client";

import { useState } from "react";

// ── Types ────────────────────────────────────────────v──────────────────────────

type ExperienceProps = {
  number: string;
  title: string;
  org: string;
  period: string;
  description: string;
  tags: string;
};

type CourseworkYear = {
  year: string;
  label: string;
  courses: string[];
};

// ── Experience Item (mirrors Project layout) ───────────────────────────────────

function Experience({ number, title, org, period, description, tags }: ExperienceProps) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}>
        {/* NUMBER */}
        <div
          className="p"
          style={{ fontSize: "36px", opacity: 0.7, lineHeight: 1, flexShrink: 0, width: "80px" }}
        >
          {number}
        </div>

        {/* CONTENT */}
       <div style={{ flex: 1 }}>
  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
    <h2 className="h1" style={{ fontSize: "2rem", margin: 0, lineHeight: 1.1, flex: 1, minWidth: 0 }}>
      {title}
    </h2>
    <span className="p" style={{ fontSize: "12px", opacity: 0.5, flexShrink: 0 }}>
      {period}
    </span>
  </div>

          <p className="p" style={{ fontSize: "13px", opacity: 0.6, marginTop: "4px", textTransform: "none" }}>
            {org}
          </p>

          <p
            className="p"
            style={{ textTransform: "none", fontSize: "14px", lineHeight: "1.6", marginTop: "10px" }}
          >
            {description}
          </p>

          <p className="p" style={{ marginTop: "10px", fontSize: "12px", opacity: 0.7 }}>
            {tags}
          </p>
        </div>
      </div>

      <div className="white-space" style={{ height: "32px" }} />
      <div className="hr" />
      <div className="white-space" style={{ height: "32px" }} />
    </div>
  );
}

// ── Coursework Dropdown ────────────────────────────────────────────────────────

function CourseworkDropdown({ year, label, courses }: CourseworkYear) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "14px 0",
          color: "inherit",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "24px" }}>
          <span className="p" style={{ fontSize: "12px", opacity: 1, minWidth: "32px" }}>
            {year}
          </span>
          <p className="p" style={{ textTransform: "none", marginTop: "10px", fontSize: "14px", lineHeight: "1.6" }}>
            {label}
          </p>
        </div>
        <span
          className="p"
          style={{
            fontSize: "18px",
            opacity: 0.5,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div style={{ paddingBottom: "14px", paddingLeft: "56px" }}>
          {courses.map((course, i) => (
            <p
              key={i}
              className="p"
              style={{
                textTransform: "none",
                fontSize: "13px",
                lineHeight: "1.8",
                opacity: 0.8,
                margin: 0,
              }}
            >
              — {course}
            </p>
          ))}
        </div>
      </div>

      <div className="hr" />
    </div>
  );
}

// ── Section Header ─────────────────────────────────────────────────────────────

function SectionHeader({ title }: { title: string }) {
  return (
    <>
      <div className="white-space" style={{ height: "32px" }} />
      <div className="white-space" style={{ height: "32px" }} />
      <h2 className="h1 primary" style={{ fontSize: "2rem", marginBottom: "4px" }}>
        {title}
      </h2>
      <div className="white-space" style={{ height: "32px" }} />
      <div className="hr" />
      <div className="white-space" style={{ height: "32px" }} />
    </>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function CV() {
  const coursework: CourseworkYear[] = [
    {
      year: "Y1",
      label: "First Year",
      courses: [
        "Calculus I & II",
        "Introduction to Computer Science",
        "Linear Algebra",
        "Introduction to Physics",
        "Discrete Mathematics",
      ],
    },
    {
      year: "Y2",
      label: "Second Year",
      courses: [
        "Data Structures & Algorithms",
        "Computer Architecture",
        "Probability & Statistics",
        "Multivariable Calculus",
        "Introduction to Machine Learning",
      ],
    },
    {
      year: "Y3",
      label: "Third Year",
      courses: [
        "Operating Systems",
        "Compilers",
        "Deep Learning",
        "Robotics",
        "Distributed Systems",
      ],
    },
    {
      year: "Y4",
      label: "Fourth Year",
      courses: [
        "Robot Perception",
        "Advanced Algorithms",
        "Natural Language Processing",
        "Computer Vision",
        "Senior Thesis",
      ],
    },
  ];

  const skills = [
    {
      category: "Languages",
      summary:
        "Proficient in Python, C++, and Go; working knowledge of TypeScript, Rust, and CUDA.",
    },
    {
      category: "Frameworks & Tools",
      summary:
        "PyTorch, ROS 2, LLVM, Docker, Git, and standard ML/scientific computing libraries.",
    },
    {
      category: "Research",
      summary:
        "Experience in robot manipulation, compiler design, and distributed systems research.",
    },
  ];

  const teaching = [
    "Teaching Assistant — Data Structures & Algorithms (Fall 2023)",
    "Teaching Assistant — Introduction to Machine Learning (Spring 2024)",
    "Lab Instructor — Computer Architecture (Fall 2024)",
    "Guest Lecturer — Robotics Seminar (Spring 2025)",
  ];

  return (
    <main className="container min-h-screen" style={{ paddingLeft: '16em', paddingRight: '16em' }}>

      {/* PAGE HEADER */}
      <div className="row">
        <div>
          <h1 className="h1 primary">CV</h1>
          <p className="p" style={{ textTransform: "none", marginTop: "10px", fontSize: "16px", lineHeight: "1.6" }}>
            Education, experience, and background.
          </p>
        </div>
      </div>

      <div className="white-space" style={{ height: "32px" }} />
      <div className="hr" />

      {/* ── EDUCATION ─────────────────────────────────────────── */}
      <SectionHeader title="Education" />

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div className="p" style={{ fontSize: "36px", opacity: 0.7, lineHeight: 1, flexShrink: 0, width: "80px" }}>
          01
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px" }}>
            <h2 className="h1" style={{ fontSize: "2rem", margin: 0, lineHeight: 1.1 }}>
              B.S. Computer Science
            </h2>
            <span className="p" style={{ fontSize: "12px", opacity: 0.5, flexShrink: 0 }}>
              2021 – 2025
            </span>
          </div>
          <p className="p" style={{ fontSize: "13px", opacity: 0.6, marginTop: "4px", textTransform: "none" }}>
            University Name · GPA 3.9 / 4.0
          </p>

          {/* Coursework dropdowns */}
          <div style={{ marginTop: "20px" }}>
            {coursework.map((y) => (
              <CourseworkDropdown key={y.year} {...y} />
            ))}
          </div>
        </div>
      </div>

      <div className="white-space" style={{ height: "32px" }} />
      <div className="hr" />
      <div className="white-space" style={{ height: "32px" }} />

      {/* ── EXPERIENCE ────────────────────────────────────────── */}
      <SectionHeader title="Experience" />

      <Experience
        number="01"
        title="Research Assistant"
        org="Robotics & Perception Lab"
        period="Jan 2024 – Present"
        description="Developed physics-conditioned grasp generation pipelines for tool-use tasks, integrating real-time contact simulation with learned scoring functions to improve grasp stability on deformable objects."
        tags="Python · PyTorch · ROS 2 · Research"
      />

      <Experience
        number="02"
        title="Software Engineering Intern"
        org="Acme Systems"
        period="Summer 2023"
        description="Built an internal observability dashboard that reduced on-call alert noise by 40% through smarter aggregation and anomaly detection across distributed microservices."
        tags="Go · Prometheus · Kubernetes · Internship"
      />

      <Experience
        number="03"
        title="Undergraduate Researcher"
        org="Programming Languages Group"
        period="Sep 2022 – Dec 2023"
        description="Contributed to an LLVM-based C subset compiler, implementing SSA construction, constant folding, and a graph-coloring register allocator that improved generated code performance by 22%."
        tags="C++ · LLVM · Compilers · Research"
      />

      {/* ── TEACHING ──────────────────────────────────────────── */}
      <SectionHeader title="Teaching" />

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ width: "80px", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          {teaching.map((item, i) => (
            <p
              key={i}
              className="p"
              style={{
                textTransform: "none",
                fontSize: "14px",
                lineHeight: "1.8",
                opacity: 0.8,
                margin: 0,
              }}
            >
              — {item}
            </p>
          ))}
        </div>
      </div>

      <div className="white-space" style={{ height: "32px" }} />
      <div className="hr" />
      <div className="white-space" style={{ height: "32px" }} />

      {/* ── SKILLS ────────────────────────────────────────────── */}
      <SectionHeader title="Skills" />

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ width: "80px", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          {skills.map((s, i) => (
            <div key={i} style={{ marginBottom: "16px" }}>
              <p className="p" style={{ fontSize: "12px", opacity: 0.5, margin: 0 }}>
                {s.category}
              </p>
              <p
                className="p"
                style={{
                  textTransform: "none",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginTop: "4px",
                  opacity: 0.85,
                }}
              >
                {s.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="white-space" style={{ height: "32px" }} />
      <div className="white-space" style={{ height: "32px" }} />

    </main>
  );
}
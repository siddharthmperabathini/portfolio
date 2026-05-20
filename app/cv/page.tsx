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

type Course = {
  name: string;
  subject: string;
  number: string;
};

type CourseworkYear = {
  year: string;
  label: string;
  courses: Course[];
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
          maxHeight: open ? "800px" : "0",
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
              —{" "}
              <a
                href={`https://selfservice.mypurdue.purdue.edu/prod/bzwsrch.p_catalog_detail?subject=${course.subject}&term=CURRENT&cnbr=${course.number}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.2)" }}
              >
                {course.subject} {course.number}: {course.name}
              </a>
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
      year: "F26",
      label: "Fall 2026 (In Progress)",
      courses: [
        { subject: "CS", number: "35400", name: "Operating Systems" },
        { subject: "CS", number: "38100", name: "Intro Analysis Algor" },
        { subject: "MA", number: "35301", name: "Linear Algebra II" },
        { subject: "MA", number: "42500", name: "Elem Complex Anly" },
        { subject: "MA", number: "45300", name: "Algebra I" },
      ],
    },
    {
      year: "F25",
      label: "Fall 2025",
      courses: [
        { subject: "CS", number: "37300", name: "Data Mining & Machine Learning" },
        { subject: "CS", number: "48900", name: "Embedded Systems" },
        { subject: "MA", number: "34100", name: "Foundations Analysis" },
        { subject: "MA", number: "36600", name: "Ord Differential Eqs" },
      ],
    },
    {
      year: "S25",
      label: "Spring 2025",
      courses: [
        { subject: "CS", number: "25200", name: "Systems Programming" },
        { subject: "CS", number: "34800", name: "Information Systems" },
        { subject: "CS", number: "47100", name: "Intr To Artifcl Intlgn" },
      ],
    },
    {
      year: "F24",
      label: "Fall 2024",
      courses: [
        { subject: "CS", number: "25000", name: "Computer Architecture" },
        { subject: "CS", number: "25100", name: "Data Structures And Algorithms" },
        { subject: "MA", number: "35100", name: "Elem Linear Algebra" },
      ],
    },
    {
      year: "S24",
      label: "Spring 2024",
      courses: [
        { subject: "CS", number: "18200", name: "Foundations Of Comp Sc" },
        { subject: "CS", number: "24000", name: "Programming In C" },
      ],
    },
    {
      year: "F23",
      label: "Fall 2023",
      courses: [
        { subject: "CS", number: "18000", name: "Prob Solving & O-O Programming" },
        { subject: "MA", number: "26100", name: "Multivariate Calculus" },
      ],
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      summary:
        "Python, Java, C, C++, R, Rust, SQL, JavaScript, Flutter, Assembly, Tulip, PowerBI",
    },
    {
      category: "Frameworks & Libraries",
      summary:
        "SpringBoot, React, Angular, Vue, Django, Flask, Node.js, Express.js, PyTorch, Tensorflow",
    },
    {
      category: "Tools & Databases",
      summary:
        "Git, Docker, PostgreSQL, SQLAlchemy, MySQL, MongoDB",
    },
    {
      category: "Concepts & Technologies",
      summary:
        "Machine Learning, Data Visualization, Version Control",
    },
  ];

  const teaching = [
    "Teaching Assistant — Data Structures & Algorithms",
    "Teaching Assistant — C Programming",
    "Teaching Assistant — Database Systems",
    "Teaching Assistant — Intro to CS",
    "CS Help Room Consultant (September 2024 - Present)",
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
              B.S. Computer Science and Mathematics
            </h2>
            <span className="p" style={{ fontSize: "12px", opacity: 0.5, flexShrink: 0 }}>
              May 2027
            </span>
          </div>
          <p className="p" style={{ fontSize: "13px", opacity: 0.6, marginTop: "4px", textTransform: "none" }}>
            Purdue University · GPA 3.95 / 4.0
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
        title="Full-Stack Software Engineering Intern"
        org="Veygo Rentals"
        period="July 2024 – Present"
        description="Developing a Full Stack Application for reservations and vehicle tracking using Rust and PostgreSQL. Implementing backend features including a robust REST API with token-based authentication. Building frontend components for iOS and React web apps, achieving a 60% increase in development frequency through Agile workflows."
        tags="Rust · PostgreSQL · React · iOS · Agile"
      />

      <Experience
        number="02"
        title="iOS Developer"
        org="Huddle Social"
        period="July 2024 – Present"
        description="Built a Swift-based iOS UI for student events and housing, integrated with Firebase/Firestore. Developed a Python web scraper for college databases, driving 25% monthly growth."
        tags="Swift · iOS · Firebase · Python · Web Scraping"
      />

      <Experience
        number="03"
        title="Machine Learning Engineer"
        org="Finish Line"
        period="August 2023 – December 2023"
        description="Developed a dynamic order routing model in Python and R, cleaning 500GB of data with pandas. Designed an interactive map in R using GGplot to visualize 700 store performances. Researched KNN, Random Forest, and ARIMA models using PyTorch and TensorFlow."
        tags="Python · R · PyTorch · TensorFlow · pandas"
      />

      <Experience
        number="04"
        title="Full Stack Developer"
        org="AstraZeneca"
        period="January 2024 – May 2024"
        description="Developed Lean Cards platform by automating notifications and designing reviewer workflows in Tulip. Engineered a real-time relational database and researched Power BI integration for data-driven decision-making."
        tags="Tulip · SQL · Power BI · Full Stack"
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
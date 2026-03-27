"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const visibilityClass = isVisible ? "visible" : "";

  return (
<main className="container relative min-h-screen" style={{ paddingLeft: '16em', paddingRight: '16em' }}>
      {/* HERO */}
      <div className="first items-start justify-start" style={{ display: 'flex', flexDirection: 'row', gap: 'clamp(16px, 12vw, 160px)' }}>

        {/* LEFT COLUMN */}
        <div className="flex flex-col mt-8" style={{ flex: 1, minWidth: 0 }}>
          <div className="reveal">
            <h1
              className={`hide-2 ${visibilityClass} h1 primary font-bold leading-none`}
              style={{ fontSize: 'clamp(2rem, 8vw, rem)', wordBreak: 'break-word' }}
            >
              Siddharth Perabathini
            </h1>
          </div>
          <div className="slidein" style={{ maxWidth: '95%' }}></div>

          <div className="row intro">
            <div className="p">Computer Science and Mathematics | Purdue University</div>
          </div>
          <p className="p" style={{ fontSize: "16px", lineHeight: "1.6", textTransform: "none", maxWidth: "45ch" }}>
            I'm a computer science and mathematics student focused on building systems that are both efficient and thoughtful.
            My interests lie at the intersection of machine learning, algorithms, and software engineering, where I enjoy
            breaking down complex problems into clean, scalable solutions. I'm currently exploring how theory translates into
            real-world impact, with an emphasis on performance, design, and clarity.
          </p>
        </div>

     {/* RIGHT COLUMN: Image */}
<div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minWidth: 0 }}>
  <div className={`reveal hide-2 ${visibilityClass}`} style={{ width: '100%' }}>
    <img
      src="/images/Siddharth.jpg"
      alt="Siddharth Perabathini"
      style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '0.5rem', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}
      className="rounded-lg shadow-lg"
    />
  </div>
</div>

      </div>

      <div className="white-space small"></div>

      {/* SECTION: ML / Projects / Algorithms */}
      <div className="section-row">
        <div className={`reveal hide-2 ${visibilityClass}`}>
          <h1 className="h1 secondary section-word">ML</h1>
        </div>
        <Link href="/projects" style={{ textDecoration: 'none' }}>
          <div className={`nav-item projects hide-3 ${visibilityClass}`}>
            <div>Projects</div>
            <div className="id">02</div>
          </div>
        </Link>
        <div className={`reveal hide-3 ${visibilityClass}`}>
          <h1 className="h1 secondary section-word">Algorithms</h1>
        </div>
      </div>

      <div className={`hr hide-4 ${visibilityClass}`}></div>

      <div className="row intro">
        <div className="p">currently studying</div>
      </div>
      <p className="p" style={{ fontSize: "16px", lineHeight: "1.6", textTransform: "none", maxWidth: "45ch" }}>
        I am especially interested in programming languages and compilers as tools for building both domain-specific,
        high-performance systems, and the future of machine intelligence.
      </p>

      <div className="white-space"></div>

      {/* SECTION: Systems / Math / CV */}
      <div className="section-row">
        <div className={`reveal hide-1 ${visibilityClass}`}>
          <h1 className="h1 secondary section-word">Systems</h1>
        </div>
        <div className={`reveal hide-2 ${visibilityClass}`}>
          <h1 className="h1 secondary section-word">Math</h1>
        </div>
        <Link href="/CV" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className={`nav-item about hide-1 ${visibilityClass}`}>
            <div>CV</div>
            <div className="id">01</div>
          </div>
        </Link>
      </div>

      <div className={`hr hide-3 ${visibilityClass}`}></div>

      <p className="p" style={{ fontSize: "16px", lineHeight: "1.6", textTransform: "none", maxWidth: "45ch" }}>
        I am especially interested in programming languages and compilers as tools for building both domain-specific,
        high-performance systems, and the future of machine intelligence.
      </p>

      <div className="white-space"></div>

      {/* SECTION: Software / LinkedIn / Engineer */}
      <div className="section-row">
        <div className={`reveal hide-1 ${visibilityClass}`}>
          <h1 className="h1 secondary section-word">Software</h1>
        </div>
        <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className={`nav-item contact hide-2 ${visibilityClass}`}>
            <div>LinkedIn</div>
            <div className="id">01</div>
          </div>
        </Link>
        <div className={`reveal hide-3 ${visibilityClass}`}>
          <h1 className="h1 secondary section-word">Engineer</h1>
        </div>
      </div>

      <div className={`hr hide-4 ${visibilityClass}`}></div>

      <div className="row intro">
        <div className="p">Aspiring</div>
        <p className="p" style={{ fontSize: "16px", lineHeight: "1.6", textTransform: "none", maxWidth: "45ch" }}>
          I am especially interested in programming languages and compilers as tools for building both domain-specific,
          high-performance systems, and the future of machine intelligence.
        </p>
      </div>

      <div className="white-space"></div>
    </main>
  );
}
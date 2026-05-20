"use client";

type ProjectProps = {
  number: string;
  title: string;
  description: string;
  languages: string;
};

function Project({ number, title, description, languages }: ProjectProps) {
  return (
    <div>
      {/* TITLE ROW */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        {/* LEFT: NUMBER */}
        <div
          className="p"
          style={{
            fontSize: "36px",
            opacity: 0.7,
            lineHeight: 1,
            flexShrink: 0,
            width: "80px",
          }}
        >
          {number}
        </div>

        {/* RIGHT: CONTENT */}
        <div style={{ flex: 1 }}>
          <h1 className="h1" style={{ fontSize: "4rem", margin: 0, lineHeight: 1 }}>
            {title}
          </h1>

          <p
            className="p"
            style={{
              textTransform: "none",
              fontSize: "14px",
              lineHeight: "1.6",
              marginTop: "10px",
            }}
          >
            {description}
          </p>

          <p
            className="p"
            style={{
              marginTop: "10px",
              fontSize: "12px",
              opacity: 0.7,
            }}
          >
            {languages}
          </p>
        </div>
      </div>

      <div className="white-space small"></div>
      <div className="hr"></div>
      <div className="white-space small"></div>
    </div>
  );
}

export default function Projects() {
  return (
    <main className="container min-h-screen" style={{ paddingLeft: '16em', paddingRight: '16em' }}>

      {/* HEADER */}
      <div className="row">
        <div>
          <h1 className="h1 primary">Projects</h1>
          <p className="p" style={{ textTransform: "none", marginTop: "10px", fontSize: "16px", lineHeight: "1.6" }}>
            Research work, software systems, and smaller experiments.
          </p>
        </div>
      </div>

      <div className="white-space small"></div>
      <div className="hr"></div>
      <div className="white-space small"></div>

      <Project
        number="01"
        title="SPARK - AI-Powered Knowledge Evaluation Web App"
        description="Built a full-stack system using Flask APIs, React, and PostgreSQL for knowledge evaluation via audio, text, and video. Integrated Librosa and Silero VAD for voice analysis, OpenAI Whisper API for speech-to-text, and OpenCV for facial expression detection. Evaluated speech content with GPT API, achieving 92% confidence scoring accuracy."
        languages="Flask · React · PostgreSQL · OpenAI · OpenCV · Librosa"
      />
      <Project
        number="02"
        title="Notewise - Handwritten Knowledge Digitization System"
        description="Building an end-to-end iOS pipeline that converts handwritten notes into structured Notion pages and Latex documents. Integrating on-device OCR/HTR models, adaptive layout segmentation, and image-to-LaTeX models using Core ML and TensorFlow.js."
        languages="iOS · Swift · Core ML · TensorFlow.js · Notion API · LaTeX"
      />
      <Project
        number="03"
        title="Context Dependent NFC + E-Ink Keychain"
        description="Developing a low-power ESP32-S3 device with e-ink display, NFC, and BLE, dynamically switching between profiles (business card, emergency ID) using location, time, and geofencing. Implementing a context inference pipeline with rule-based logic and TensorFlow Lite."
        languages="C++ · ESP32-S3 · TensorFlow Lite · BLE · NFC"
      />
      <Project
        number="04"
        title="Custom Compiler and Shell in C/C++"
        description="Developed a compiler and Bash shell in C/C++, implementing lexical, syntax, and semantic analysis with a symbol table. Integrated a type checker and applied optimization that generated efficient Assembly code, achieving 55% faster execution."
        languages="C++ · Assembly · Compilers · Operating Systems"
      />

    </main>
  );
}
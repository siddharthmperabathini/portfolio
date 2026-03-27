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
    <main className="container min-h-screen">

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
        title="Physics-Conditioned Grasping for Stable Tool Use"
        description="A framework that generates robot grasps tailored for tool use by combining physics-based constraints with task-aware scoring, ensuring stability during dynamic interactions."
        languages="Python · PyTorch · Robotics"
      />
      <Project
        number="02"
        title="C Subset Compiler (LLVM)"
        description="A compiler for a subset of C with an LLVM backend, featuring SSA generation and optimization passes such as constant folding, dead code elimination, and register allocation."
        languages="C++ · LLVM · Compilers"
      />
      <Project
        number="03"
        title="Distributed Key-Value Store"
        description="A fault-tolerant distributed key-value store implementing replication and consensus, designed for scalability and consistency across nodes."
        languages="Go · Distributed Systems · Networking"
      />
      <Project
        number="04"
        title="Distributed Key-Value Store"
        description="A fault-tolerant distributed key-value store implementing replication and consensus, designed for scalability and consistency across nodes."
        languages="Go · Distributed Systems · Networking"
      />

    </main>
  );
}
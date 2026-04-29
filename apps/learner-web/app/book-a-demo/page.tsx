"use client";

import { useState } from "react";
import BookDemoModal from "./BookDemoModal";

export default function BookADemoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%)",
        padding: "2rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Page Content */}
      <div style={{ textAlign: "center", maxWidth: "800px" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: "800",
            color: "#2d3748",
            marginBottom: "1rem",
            lineHeight: "1.2",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Experience PRGEEQ Platform
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#718096",
            marginBottom: "2.5rem",
            lineHeight: "1.6",
          }}
        >
          See how our AI-powered learning management system can transform your
          organization. Book a personalized demo with our experts.
        </p>

        {/* Trigger Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: "1.2rem 3rem",
            fontSize: "1.1rem",
            fontWeight: "700",
            color: "white",
            background: "linear-gradient(135deg, #b8956a 0%, #d4856b 50%, #e8976f 100%)",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            boxShadow: "8px 8px 16px #cfcfcf, -8px -8px 16px #ffffff",
            transition: "all 0.3s ease",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "12px 12px 24px #cfcfcf, -12px -12px 24px #ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "8px 8px 16px #cfcfcf, -8px -8px 16px #ffffff";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(1px)";
            e.currentTarget.style.boxShadow =
              "inset 4px 4px 8px #cfcfcf, inset -4px -4px 8px #ffffff";
          }}
        >
          Book a Demo Now
        </button>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "4rem",
            maxWidth: "900px",
            margin: "4rem auto 0",
          }}
        >
          {[
            {
              icon: "🎯",
              title: "Personalized Demo",
              description:
                "Tailored to your specific needs and use cases",
            },
            {
              icon: "⚡",
              title: "Quick Setup",
              description: "See results in minutes, not weeks",
            },
            {
              icon: "💡",
              title: "Expert Guidance",
              description: "Get insights from our product specialists",
            },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                background: "#e0e0e0",
                padding: "2rem",
                borderRadius: "18px",
                boxShadow: "8px 8px 16px #cfcfcf, -8px -8px 16px #ffffff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "12px 12px 24px #cfcfcf, -12px -12px 24px #ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "8px 8px 16px #cfcfcf, -8px -8px 16px #ffffff";
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#2d3748",
                  marginBottom: "0.5rem",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#718096",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}

import { ImageResponse } from "next/og";

export const alt = "R-GoL-EE — Conway's Game of Life Simulator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#04060d",
          backgroundImage:
            "radial-gradient(600px 300px at 20% 0%, rgba(14,116,200,.25), transparent), radial-gradient(600px 300px at 100% 100%, rgba(34,211,238,.18), transparent)",
          color: "#e2e8f0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 14,
            marginBottom: 30,
          }}
        >
          {["#3b82f6", "#22c55e", "#facc15", "#f97316", "#ef4444"].map((c) => (
            <div
              key={c}
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: c,
                display: "flex",
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: 6,
            color: "#7dd3fc",
          }}
        >
          R-GoL-EE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 18,
            color: "#7c8aa5",
            letterSpacing: 2,
          }}
        >
          Conway&apos;s Game of Life — Extended Edition
        </div>
      </div>
    ),
    size
  );
}

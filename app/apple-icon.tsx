import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E0E10",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64" fill="none">
          <circle cx="24" cy="24" r="11" stroke="#FF5A1F" strokeWidth="4" />
          <circle cx="24" cy="24" r="3.4" fill="#FF5A1F" />
          <path d="M31.5 31.5 L50 50" stroke="#FF5A1F" strokeWidth="4" strokeLinecap="round" />
          <path d="M43 43 L49 37" stroke="#FF5A1F" strokeWidth="4" strokeLinecap="round" />
          <path d="M47 47 L53 41" stroke="#FF5A1F" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#0E0E10",
          color: "#F5F4F2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#FF5A1F",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
            Urgencias 24 horas · Santiago y la RM
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1, letterSpacing: -2, textTransform: "uppercase" }}>
            ¿Quedaste fuera?
          </div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1, letterSpacing: -2, textTransform: "uppercase", color: "#FF5A1F" }}>
            Llegamos en 20 min.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{BUSINESS.name}</div>
          <div style={{ fontSize: 40, fontWeight: 800, color: "#FF5A1F" }}>
            {BUSINESS.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size
  );
}

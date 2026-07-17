import { ImageResponse } from "next/og";

export const alt = "Portafolio de Edson Castillo, desarrollador Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 55%, #1e3a8a 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1020px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.12em",
              marginBottom: 28,
              textTransform: "uppercase",
            }}
          >
            Portafolio profesional
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            Edson Castillo
          </div>
          <div
            style={{
              color: "#cbd5e1",
              display: "flex",
              fontSize: 38,
              lineHeight: 1.25,
            }}
          >
            Desarrollador Full Stack · Next.js · Laravel · IA
          </div>
        </div>
      </div>
    ),
    size
  );
}

import styles from "../styles";

export default function WebTankCard({ name, level, capacity }) {
  const pct = Math.min(
    100,
    Math.max(0, ((level || 0) / (capacity || 1)) * 100)
  );

  // Tank status colors based on water level
  let waterColor = "#3DD06F";

  if (pct < 30) {
    waterColor = "#FF3038";
  } else if (pct < 70) {
    waterColor = "#F5B942";
  }

  return (
    <div
  className="tank-card"
  style={{
    ...styles.card,
        width: "100%",
        maxWidth: "220px",
        minWidth: 0,
        textAlign: "center",
        padding: "20px 18px",
        background: "#0d1f3c",
        border: "1px solid #1e3a5f",
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Tank name */}
      <p
        style={{
          color: "#2F6FE4",
          fontWeight: "700",
          fontSize: "14px",
          margin: "0 0 14px",
        }}
      >
        {name}
      </p>

      {/* Tank visualization */}
      <div
        style={{
          height: "190px",
          width: "95px",
          background: "#000000",
          margin: "0 auto",
          borderRadius: "14px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid #ffffff",
          boxSizing: "border-box",
        }}
      >
        {/* Water */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: `${pct}%`,
            background: waterColor,
            transition: "height 0.8s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontWeight: "800",
              fontSize: "18px",
              color: "#FFFFFF",
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.35)",
            }}
          >
            {pct.toFixed(0)}%
          </span>
        </div>
      </div>

        {/* Capacity */}
      <p
        style={{
          fontSize: "10px",
          color: "#64748b",
          margin: "4px 0 0",
        }}
      >
        {(capacity || 0).toLocaleString()} L
      </p>

    </div>
  );
}
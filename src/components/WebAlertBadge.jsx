import styles from "../styles";

export default function WebAlertBadge({ message, type }) {
  if (!message) return null;

  const isWarning = type === "warning";
  const isCritical = type === "critical";

  const backgroundColor = isCritical
    ? "#351016"
    : isWarning
    ? "#3b2a08"
    : "#064e3b";

  const borderColor = isCritical
    ? "#ef4444"
    : isWarning
    ? "#f59e0b"
    : "#22c55e";

  const accentColor = isCritical
    ? "#ef4444"
    : isWarning
    ? "#f59e0b"
    : "#22c55e";

  const textColor = isCritical
    ? "#f87171"
    : isWarning
    ? "#fbbf24"
    : "#4ade80";

  const icon = isCritical ? "⚠" : isWarning ? "⚠" : "✓";

  const title = isCritical
    ? "SYSTEM ALERT"
    : isWarning
    ? "SYSTEM WARNING"
    : "SYSTEM STATUS";

  return (
    <div
      style={{
        ...styles.card,
        display: "flex",
        alignItems: "center",
        background: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "14px",
        padding: "12px 18px",
        margin: 0,
        minHeight: "58px",
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          width: "30px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
          background: accentColor,
          color: "#ffffff",
          fontSize: "16px",
          marginRight: "12px",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>

      <div style={{ textAlign: "left" }}>
        <p
          style={{
            fontSize: "9px",
            fontWeight: "700",
            margin: "0 0 2px 0",
            color: textColor,
            letterSpacing: "1px",
          }}
        >
          {title}
        </p>

        <p
          style={{
            fontSize: "12px",
            fontWeight: "500",
            margin: 0,
            color: "#ffffff",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
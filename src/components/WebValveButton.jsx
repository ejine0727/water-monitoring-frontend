import React from "react";

export default function WebValveButton({
  label,
  isOpen,
  onToggle,
  onAuto,
  connection = "LoRa",
  commandConfirmed = true,
}) {
  const handleToggle = (e) => {
    e.stopPropagation();
    onToggle();
  };

  const handleAuto = (e) => {
    e.stopPropagation();
    onAuto();
  };

  const statusColor = isOpen ? "#3DD06F" : "#FF3038";

  return (
    <div
      className="valve-card"
  onClick={handleAuto}
  style={{
        position: "relative",
        background: "#0d1f3c",
        border: `2px solid ${statusColor}`,
        borderRadius: "14px",
        padding: "9px 12px 8px",
        minHeight: "90px",
        boxSizing: "border-box",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        boxShadow: isOpen
          ? "0 0 8px rgba(61, 208, 111, 0.18)"
          : "none",
      }}
    >
      {/* Connection badge */}
      <span
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: "4px 8px",
          background: connection === "LoRa" ? "#3D8C69" : "#9B4D5A",
          color: "#FFFFFF",
          fontSize: "10px",
          lineHeight: 1,
          borderRadius: "0 11px 0 6px",
        }}
      >
        {connection}
      </span>

      {/* Valve name */}
      <h3
        style={{
          margin: "0 0 6px",
          color: "#FFFFFF",
          fontSize: "17px",
          fontWeight: "700",
          lineHeight: 1.2,
        }}
      >
        {label}
      </h3>



      {/* Open / Close toggle */}
     <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "5px",
  }}
>
        

        <button
          type="button"
          onClick={handleToggle}
          aria-label={`Set ${label} ${isOpen ? "closed" : "open"}`}
          style={{
            position: "relative",
             width: "42px",
            height: "22px",
            padding: 0,
            borderRadius: "20px",
            border: `2px solid ${statusColor}`,
            background: "transparent",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "3px",
              left: isOpen ? "23px" : "3px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: statusColor,
              transition: "left 0.2s ease",
              boxShadow: `0 0 5px ${statusColor}`,
            }}
          />
        </button>
      </div>

   

      {/* Command status */}
      <p
        style={{
          margin: 0,
          fontSize: "11px",
          color: commandConfirmed ? "#D8E0E8" : "#FFD5D5",
        }}
      >
        Last Command:{" "}
        <span
          style={{
            color: commandConfirmed ? "#3DD06F" : "#FF3038",
            fontWeight: "700",
          }}
        >
          {commandConfirmed ? "CONFIRMED" : "UNCONFIRMED"}
        </span>
      </p>
    </div>
  );
}
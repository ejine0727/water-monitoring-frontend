import React from "react";

export default function WebScheduleRow({
  sched,
  onEdit,
  onDelete,
  onToggle,
}) {
  return (
    <div
      onClick={onToggle}
      style={{
        background: "#0d1f3c",
        border: "1px solid #1e3a5f",
        borderRadius: "14px",
        padding: "12px 18px",
        marginBottom: "10px",
        minHeight: "68px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        cursor: "pointer",
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            color: "#ffffff",
            fontWeight: "700",
            fontSize: "16px",
            margin: "0 0 5px 0",
          }}
        >
          {sched.label}
        </p>
        

<p
  style={{
    color: "#7dd3fc",
    fontSize: "13px",
    fontWeight: "600",
    margin: 0,
  }}
>
  {sched.start_time.substring(0, 5)} -{" "}
  {sched.end_time.substring(0, 5)}
</p>

<p
  style={{
    color: sched.enabled ? "#3DD06F" : "#FF3038",
    fontSize: "11px",
    fontWeight: "700",
    margin: "5px 0 0",
  }}
>
  {sched.enabled ? "ENABLED" : "DISABLED"}
</p>

      </div>


      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexShrink: 0,
        }}
      >

        
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          style={{
            background: "transparent",
            color: "#3b82f6",
            border: "1px solid #3b82f6",
            padding: "7px 13px",
            borderRadius: "8px",
            fontSize: "11px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          EDIT
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          style={{
            background: "#ef4444",
            color: "#ffffff",
            border: "none",
            padding: "8px 13px",
            borderRadius: "8px",
            fontSize: "11px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          DEL
        </button>

      </div>
    </div>
  );
}
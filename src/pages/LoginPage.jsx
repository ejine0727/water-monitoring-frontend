import { useState } from "react";

import styles from "../styles";

export default function LoginPage({ onLogin }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    // TEMPORARY FRONTEND-ONLY LOGIN
    // Backend authentication will be connected later.

    setTimeout(() => {
      localStorage.setItem("token", "frontend-demo-token");

      onLogin({
        username: form.username,
      });

      setLoading(false);
    }, 500);
  }

  return (
    <div style={styles.loginWrap}>
      <div className="login-card" style={styles.loginCard}>
        
        {/* WATER DROP LOGO */}
        <div style={styles.loginLogo}>💧</div>

        <h1 style={styles.loginTitle}>
          Water Monitoring
        </h1>

        <p style={styles.loginSub}>
          PROJECT: WATER FILTER SYSTEM
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ width: "100%" }}
        >
          <div style={styles.formGroup}>
            <label style={styles.label}>
              USERNAME
            </label>

            <input
              style={styles.input}
              placeholder="Enter username"
              required
              value={form.username}
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              PASSWORD
            </label>

            <input
              style={styles.input}
              type="password"
              placeholder="••••••••"
              required
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />
          </div>

          <button
            style={styles.loginBtn}
            disabled={loading}
            type="submit"
          >
            {loading ? "VERIFYING..." : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>
  );
}
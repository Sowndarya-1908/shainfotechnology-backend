import React, { useEffect } from "react";

export default function PageLoader() {
  useEffect(() => {
    const css = `
/* ===== SHA BRAND LOADER ===== */
.sha-loader-wrap{
  position:fixed;
  inset:0;
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:99999;
}

/* CIRCLE */
.sha-loader{
  position:relative;
  width:120px;
  height:120px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
}

/* ROTATING RING */
.sha-loader::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:50%;
  border:4px solid rgba(255,255,255,0.08);
  border-top-color:#8b5cf6;
  border-right-color:#ec4899;
  animation:spin 1.2s linear infinite;
  box-shadow:
    0 0 25px rgba(139,92,246,.45),
    0 0 45px rgba(236,72,153,.35);
}

/* LOGO TEXT */
.sha-logo{
  font-size:28px;
  font-weight:900;
  letter-spacing:0.08em;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  animation:pulse 1.4s ease-in-out infinite;
}

/* TAGLINE */
.sha-tag{
  position:absolute;
  bottom:-26px;
  font-size:12px;
  letter-spacing:0.14em;
  color:#cbd5f5;
  opacity:.85;
}

/* ANIMATIONS */
@keyframes spin{
  to{transform:rotate(360deg)}
}

@keyframes pulse{
  0%,100%{transform:scale(1);opacity:1}
  50%{transform:scale(1.08);opacity:.85}
}

/* MOBILE */
@media(max-width:480px){
  .sha-loader{
    width:96px;
    height:96px;
  }
  .sha-logo{
    font-size:22px;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <div className="sha-loader-wrap">
      <div className="sha-loader">
        <div className="sha-logo">SHA</div>
        <div className="sha-tag">INFOTECHNOLOGY</div>
      </div>
    </div>
  );
}

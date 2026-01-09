import React, { useEffect } from "react";

export default function CallButton() {
  useEffect(() => {
    const css = `
/* ===== FLOATING CALL BUTTON (WHATSAPP STYLE) ===== */
.call-float{
  position:fixed;
  bottom:96px;          /* keep above WhatsApp button */
  right:24px;
  width:58px;
  height:58px;
  border-radius:50%;
  z-index:9999;

  display:flex;
  align-items:center;
  justify-content:center;

background: #F87171;   /* same WhatsApp green */
  box-shadow:0 10px 25px rgba(37,211,102,0.45);

  cursor:pointer;
  transition:transform .25s ease;
}

.call-float:hover{
  transform:scale(1.08);
}

/* PHONE ICON */
.call-float svg{
  width:28px;
  height:28px;
  fill:#ffffff;
}

/* MOBILE */
@media(max-width:480px){
  .call-float{
    width:54px;
    height:54px;
    right:20px;
    bottom:90px;
  }

  .call-float svg{
    width:26px;
    height:26px;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <a
      href="tel:919445747815"
      className="call-float"
      aria-label="Call SHA Infotechnology"
    >
      {/* PHONE LOGO */}
      <svg viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21 3 13.93 3 5.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z"/>
      </svg>
    </a>
  );
}

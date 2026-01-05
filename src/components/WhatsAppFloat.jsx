import React, { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  /* ================= AUTO OPEN AFTER 5 SECONDS ================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  /* ================= STYLES ================= */
  useEffect(() => {
    const css = `
/* ===== FLOAT BUTTON ===== */
.wa-float{
  position:fixed;
  bottom:24px;
  right:24px;
  width:58px;
  height:58px;
  background:#25D366;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
  z-index:9999;
  cursor:pointer;
  transition:.3s;
}

.wa-float:hover{
  transform:scale(1.08);
}

.wa-float img{
  width:30px;
}

/* ===== CHAT BOX ===== */
.wa-chat{
  position:fixed;
  bottom:96px;
  right:24px;
  width:320px;
  max-width:92vw;
  background:#ffffff;
  border-radius:16px;
  box-shadow:0 25px 70px rgba(0,0,0,0.35);
  overflow:hidden;
  z-index:9999;
  animation:fadeUp .35s ease;
}

/* HEADER */
.wa-header{
  background:#075e54;
  color:#ffffff;
  padding:14px;
  display:flex;
  align-items:center;
  gap:12px;
}

.wa-avatar{
  width:42px;
  height:42px;
  border-radius:50%;
  object-fit:contain;
  background:#ffffff;
  padding:4px;
}

.wa-name{
  font-weight:800;
  font-size:15px;
}

.wa-status{
  font-size:12px;
  color:#c8f7dc;
}

.wa-close{
  margin-left:auto;
  cursor:pointer;
  font-size:18px;
  opacity:.9;
}

/* BODY */
.wa-body{
  background:#ece5dd;
  padding:14px;
}

.wa-bubble{
  background:#000000;
  padding:10px 12px;
  border-radius:12px;
  font-size:14px;
  width:fit-content;
  max-width:85%;
  line-height:1.5;
}

/* INPUT */
.wa-input{
  display:flex;
  align-items:center;
  padding:10px;
  gap:10px;
  border-top:1px solid #eee;
}

.wa-input input{
  flex:1;
  border:none;
  outline:none;
  font-size:14px;
}

.wa-send{
  width:38px;
  height:38px;
  border-radius:50%;
  background:#25D366;
  color:#ffffff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  cursor:pointer;
  transition:.25s;
}

.wa-send:hover{
  transform:scale(1.1);
}

/* ANIMATION */
@keyframes fadeUp{
  from{opacity:0; transform:translateY(12px)}
  to{opacity:1; transform:none}
}

/* MOBILE */
@media(max-width:480px){
  .wa-chat{
    right:16px;
    bottom:88px;
  }

  .wa-float{
    width:54px;
    height:54px;
    bottom:20px;
    right:20px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  /* ================= LOGIC ================= */
  const phone = "919445747815";

  const defaultMessage =
    "Hi SHA Infotechnology 👋 I would like to enquire about your services.";

  const sendWhatsApp = (msg) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* CHAT BOX */}
      {open && (
        <div className="wa-chat">
          <div className="wa-header">
            {/* 👇 YOUR LOGO AS AGENT PHOTO */}
            <img
              className="wa-avatar"
              src="/LOGO.jpeg"
              alt="SHA Infotechnology"
            />
            <div>
              <div className="wa-name">SHA Infotechnology</div>
              <div className="wa-status">Online</div>
            </div>
            <div className="wa-close" onClick={() => setOpen(false)}>
              ✕
            </div>
          </div>

          <div className="wa-body">
            <div className="wa-bubble">
              Hi there 👋 <br />
              How can we help you today?
            </div>
          </div>

          <div className="wa-input">
            <input
              type="text"
              defaultValue={defaultMessage}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendWhatsApp(e.target.value);
              }}
            />
            <div
              className="wa-send"
              onClick={(e) =>
                sendWhatsApp(e.currentTarget.previousSibling.value)
              }
            >
              ➤
            </div>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <div className="wa-float" onClick={() => setOpen(!open)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </div>
    </>
  );
}

import React, { useState } from "react";
import "../../reslog.css";

const Resgister = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`wrapper ${isActive ? "active" : ""}`}>
      <span className="rotate-bg"></span>
      <span className="rotate-bg2"></span>

      <div className="form-box login">
        <h2
          className="title animation"
          style={{ "--i": 0, "--j": 21 } as React.CSSProperties}
        >
          Tizimga kirish
        </h2>
        <form action="#">
          <div
            className="input-box animation"
            style={{ "--i": 1, "--j": 22 } as React.CSSProperties}
          >
            <input type="text" required />
            <label htmlFor="">Ism</label>
            <i className="bx bxs-user"></i>
          </div>
          <div
            className="input-box animation"
            style={{ "--i": 2, "--j": 23 } as React.CSSProperties}
          >
            <input type="password" required />
            <label htmlFor="">Parol</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button
            type="submit"
            className="btn animation"
            style={{ "--i": 3, "--j": 24 } as React.CSSProperties}
          >
            Tizimga kirish
          </button>
          <div
            className="linkTxt animation"
            style={{ "--i": 5, "--j": 25 } as React.CSSProperties}
          >
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                className="register-link"
                onClick={handleRegisterClick}
              >
                Ro‘yxatdan o‘tish
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Login Info Text */}
      <div className="info-text login">
        <h2
          className="animation text-start"
          style={{ "--i": 0, "--j": 20 } as React.CSSProperties}
        >
          Xush kelibsiz!
        </h2>
        <p
          className="animation text-start"
          style={{ "--i": 1, "--j": 21 } as React.CSSProperties}
        >
          Kirganing bilan barbir hech narsani bilmaysanku. Testni ishlab nima
          qilasan. Endi o'rganishga juda kech.{" "}
        </p>
      </div>

      <div className="form-box register">
        <h2
          className="title animation"
          style={{ "--i": 17, "--j": 0 } as React.CSSProperties}
        >
           Ro‘yxatdan o‘tish
        </h2>
        <form action="#">
          <div
            className="input-box animation"
            style={{ "--i": 18, "--j": 1 } as React.CSSProperties}
          >
            <input type="text" required />
            <label htmlFor="">Ism</label>
            <i className="bx bxs-user"></i>
          </div>
          <div
            className="input-box animation"
            style={{ "--i": 19, "--j": 2 } as React.CSSProperties}
          >
            <input type="email" required />
            <label htmlFor="">Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div
            className="input-box animation"
            style={{ "--i": 20, "--j": 3 } as React.CSSProperties}
          >
            <input type="password" required />
            <label htmlFor="">Parol</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button
            type="submit"
            className="btn animation"
            style={{ "--i": 21, "--j": 4 } as React.CSSProperties}
          >
            Ro‘yxatdan o‘tish
          </button>
          <div
            className="linkTxt animation"
            style={{ "--i": 22, "--j": 5 } as React.CSSProperties}
          >
            <p>
              Already have an account?{" "}
              <a href="#" className="login-link" onClick={handleLoginClick}>
                Tizimga kirish
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-text register">
        <h2
          className="animation"
          style={{ "--i": 17, "--j": 0 } as React.CSSProperties}
        >
          Xush kelibsiz!
        </h2>
        <p
          className="animation"
          style={{ "--i": 18, "--j": 1 } as React.CSSProperties}
        >
          Kirganing bilan barbir hech narsani bilmaysanku. Testni ishlab nima
          qilasan. Endi o'rganishga juda kech.{" "}
        </p>
      </div>
    </div>
  );
};

export default Resgister;

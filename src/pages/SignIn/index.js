import React, { useState } from "react";
import "./styles.css";

import Input from "../../components/Input";
import Button from "../../components/Button";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Complete Fields");
    } else {
      alert("Submitted:", email, password);

      //send post request here
      //then(() => {})
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <div className="login_container">
        {/*Set action and method here or use handleSubmit */}
        <form>
          {/* Title */}
          <div className="title mb_15">Sign in</div>

          {/* Email */}
          <div className="mb_15">
            <div className="label">Email</div>
            <Input
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb_15">
            <div className="label">Password</div>
            <Input
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me */}
          <div className="checkbox_container mb_15">
            <input type={"checkbox"} />
            <span>Remember me?</span>
          </div>

          <div className="mb_15">
            <Button text={"Sign in"} onClick={handleSubmit} />
          </div>

          {/* Forgot Password */}
          <div className="forgot_label small_font mb_15">
            Forgot your password?
          </div>

          {/* Sign up */}
          <div className="signup_label small_font mb_15">
            Don't have an account? <span>Sign up</span>
          </div>

          {/* Resend Email */}
          <div className="resend_label small_font mb_15">
            Resend email confirmation
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;

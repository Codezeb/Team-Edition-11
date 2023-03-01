/**
 * @author Sebastian Gonzalez
 * @modifiedBy
 */
import React, { useState } from "react";

/**
 * Componente de tipo input de texto
 * @see TODO
 */
const PasswordChange = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "oldPassword":
        setOldPassword(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async(e) => {

    e.preventDefault();
    // Validate the new password
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/;
    if (!regex.test(newPassword)) {
      setErrorMessage(
        "The new password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 24 characters in length."
      );
      return;
    }
    // Make sure the new password matches the confirmation password
    if (newPassword !== confirmPassword) {
      setErrorMessage(
        "The new password and confirmation password do not match."
      );
      return;
    }
    // const response = await fetch(url para hacer el fetch)

    // TODO: Call the route to update the password with the new value
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrorMessage("");
  };
  return (
    <>
    <section class="ch-password">
      <div class="ch-password-box">
        <div class="ch-password-title-box">
          <h3>Change Password!</h3>
          <div class="text">Ready to jump back in?</div>
        </div>

        <div class="ch-password-menu-btn">
          <button type="button" class="ch-password-menu-btn-toggle">
            Menu
          </button>
        </div>
        {/* <Button /> */}

        <div class="ch-password-container">
          <div class="ch-password-container-title">
            <h4>Change Password</h4>
          </div>

          <div class="ch-password-content">
            <form class="ch-password-content-form" onSubmit={handleSubmit}>
              <div class="row">
                <div class="ch-password-input">
                  <label>Old Password</label>
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              

              <div class="ch-password-input">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="ch-password-input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="ch-password-btn">
                <button type="submit" class="ch-password-btn-style">
                  Update
                </button>
              </div>
              </div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </div>
      </div>
      </section>
      <div class="copyright-text">
        <p>
          © 2023 by .
          <a
            href="https://codespaceacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code Space Academy
          </a>
          . All Right Reserved.
        </p>
      </div>
    
    </>
  );
};

export default PasswordChange;

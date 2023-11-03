import React, { useState } from "react";

export default function Personal({ setProfile, profile }) {
  const handleChange = (e) => {
    const { value, id } = e.target;
    setProfile((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="personal">
      <div className="header">
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Stephen King"
              required
              onChange={handleChange}
              value={profile.name}
              autoComplete="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              required
              onChange={handleChange}
              value={profile.email}
              autoComplete="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              required
              onChange={handleChange}
              value={profile.phone}
              autoComplete="true"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

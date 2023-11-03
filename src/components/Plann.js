import React, { useState } from "react";
import iconarcade from "../assets/images/icon-arcade.svg";
import iconadvanced from "../assets/images/icon-advanced.svg";
import iconpro from "../assets/images/icon-pro.svg";

export default function Plan({ profile, setProfile }) {
  // const handleSlidero = () => {
  //   if (annual == "monthly") {
  //     setAnnual(() => "yearly");
  //   } else if (annual == "yearly") {
  //     setAnnual(() => "monthly");
  //   } else {
  //     return;
  //   }
  // };

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      plan: {
        ...prev.plan,
        price: parseInt(e.target.dataset.price),
        type: e.target.value,
      },
    }));
  };

  const handleAnnualChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      plan: {
        ...prev.plan,
        annual: e.target.value,
      },
    }));
  };

  const handleSlider = () => {
    if (profile.plan.annual == "monthly") {
      setProfile((prev) => ({
        ...prev,
        plan: {
          ...prev.plan,
          annual: "yearly",
        },
      }));
    } else if (profile.plan.annual == "yearly") {
      setProfile((prev) => ({
        ...prev,
        plan: {
          ...prev.plan,
          annual: "monthly",
        },
      }));
    }
  };

  return (
    <div className="plan">
      <div className="header">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="plans">
        <form action="">
          <div className="options">
            <div className="each">
              <input
                type="radio"
                name="plan"
                value="arcade"
                id="arcade"
                data-price={profile.plan.annual == "yearly" ? 90 : 9}
                checked={profile.plan.type == "arcade"}
                onChange={handleChange}
              />
              <label htmlFor="arcade">
                <div className="logo">
                  <img src={iconarcade} alt="icon-arcade" />
                </div>
                <div className="name-price">
                  <span>Arcade</span>
                  {profile.plan.annual == "monthly" ? (
                    <span>$9/mo</span>
                  ) : (
                    <span>$90/yr</span>
                  )}
                </div>
              </label>
            </div>
            <div className="each">
              <input
                type="radio"
                name="plan"
                value="advanced"
                id="advanced"
                data-price={profile.plan.annual == "yearly" ? 120 : 12}
                checked={profile.plan.type == "advanced"}
                onChange={handleChange}
              />
              <label htmlFor="advanced">
                <div className="logo">
                  <img src={iconadvanced} alt="icon-arcade" />
                </div>
                <div className="name-price">
                  <span>Advanced</span>
                  {profile.plan.annual == "monthly" ? (
                    <span>$12/mo</span>
                  ) : (
                    <span>$120/yr</span>
                  )}
                </div>
              </label>
            </div>
            <div className="each">
              <input
                type="radio"
                name="plan"
                value="pro"
                id="pro"
                data-price={profile.plan.annual == "yearly" ? 150 : 15}
                checked={profile.plan.type == "pro"}
                onChange={handleChange}
              />
              <label htmlFor="pro">
                <div className="logo">
                  <img src={iconpro} alt="icon-arcade" />
                </div>
                <div className="name-price">
                  <span>Pro</span>
                  {profile.plan.annual == "monthly" ? (
                    <span>$15/mo</span>
                  ) : (
                    <span>$150/yr</span>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div className="monthly-yearly">
            <div className="monthly">
              <input
                type="radio"
                id="monthly"
                name="monthly-yearly"
                value="monthly"
                checked={profile.plan == "monthly"}
                onChange={handleAnnualChange}
              />
              <label htmlFor="monthly">Monthly</label>
            </div>

            <div className="slider" onClick={handleSlider}>
              <div
                className={`ball ${
                  profile.plan.annual == "yearly" ? "on" : "undefined"
                }`}
              ></div>
            </div>

            <div className="yearly">
              <input
                type="radio"
                id="yearly"
                name="monthly-yearly"
                value="yearly"
                checked={profile.plan == "yearly"}
                onChange={handleAnnualChange}
              />
              <label htmlFor="yearly">Yearly</label>
            </div>
          </div>
        </form>
      </div>
      <div className="annual"></div>
    </div>
  );
}

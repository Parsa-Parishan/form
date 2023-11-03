import React, { useState } from "react";

export default function Add({ setProfile, profile }) {
  const [extras, setExtras] = useState([...profile.extras]);

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

  // const handleChecked = (e) => {
  //   if (e.target.value == "service") {
  //     setProfile((prev) => ({
  //       ...prev,
  //       extras: {
  //         ...prev.extras,
  //         onlineService: !prev.extras.onlineService,
  //       },
  //     }));
  //   } else if (e.target.value == "storage") {
  //     setProfile((prev) => ({
  //       ...prev,
  //       extras: {
  //         ...prev.extras,
  //         largerStorage: !prev.extras.largerStorage,
  //       },
  //     }));
  //   } else {
  //     setProfile((prev) => ({
  //       ...prev,
  //       extras: {
  //         ...prev.extras,
  //         customizableProfile: !prev.extras.customizableProfile,
  //       },
  //     }));
  //   }
  // };

  const handleChecked = (e) => {
    let updatedExtras = [...extras];
    if (e.target.checked) {
      updatedExtras.push({
        name: e.target.value,
        price: e.target.dataset.price,
      });
    } else {
      updatedExtras = updatedExtras.filter(
        (item) => item.name !== e.target.value
      );
    }
    setExtras(updatedExtras);
    setProfile((prev) => ({
      ...prev,
      extras: updatedExtras,
    }));
  };

  console.log(profile);
  return (
    <div className="add">
      <div className="header">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="options">
        <form action="">
          <div className="wrapper">
            <div className="input-wrapper">
              <input
                type="checkbox"
                name="add-ons"
                id="service"
                value="online service"
                onChange={handleChecked}
                data-price={profile.plan.annual == "yearly" ? 10 : 1}
                checked={extras.some(
                  (element) => element.name == "online service"
                )}
              />
            </div>
            <label htmlFor="service">
              <div className="detail">
                <h4>Online service</h4>
                <p>Access to multiplayer games</p>
              </div>
              <div className="price">
                {profile.plan.annual == "monthly" ? (
                  <p>$1/mo</p>
                ) : (
                  <p>$10/yr</p>
                )}
              </div>
            </label>
          </div>
          <div className="wrapper">
            <div className="input-wrapper">
              <input
                type="checkbox"
                name="add-ons"
                id="storage"
                value="larger storage"
                data-price={profile.plan.annual == "yearly" ? 20 : 2}
                onChange={handleChecked}
                checked={extras.some(
                  (element) => element.name == "larger storage"
                )}
              />
            </div>
            <label htmlFor="storage">
              <div className="detail">
                <h4>Larger storage</h4>
                <p>Extra 1TB of cloud save</p>
              </div>
              <div className="price">
                {profile.plan.annual == "monthly" ? (
                  <p>$2/mo</p>
                ) : (
                  <p>$20/yr</p>
                )}
              </div>
            </label>
          </div>
          <div className="wrapper">
            <div className="input-wrapper">
              <input
                type="checkbox"
                name="add-ons"
                id="profile"
                value="customizable profile"
                data-price={profile.plan.annual == "yearly" ? 20 : 2}
                onChange={handleChecked}
                checked={extras.some(
                  (element) => element.name == "customizable profile"
                )}
              />
            </div>
            <label htmlFor="profile">
              <div className="detail">
                <h4>Customizable profile</h4>
                <p>Custom theme on your profile</p>
              </div>
              <div className="price">
                {profile.plan.annual == "monthly" ? (
                  <p>$2/mo</p>
                ) : (
                  <p>$20/yr</p>
                )}
              </div>
            </label>
          </div>
          <div className="monthly-yearly">
            <div className="monthly">
              <input
                type="radio"
                id="monthly"
                name="monthly-yearly"
                value="monthly"
                checked={profile.plan.annual == "monthly"}
                onChange={handleAnnualChange}
              />
              <label htmlFor="monthly">Monthly</label>
            </div>

            <div className="slider" onClick={handleSlider}>
              <div
                className={`ball ${
                  profile.plan.annual == "yearly" ? "on" : undefined
                }`}
              ></div>
            </div>

            <div className="yearly">
              <input
                type="radio"
                id="yearly"
                name="monthly-yearly"
                value="yearly"
                checked={profile.plan.annual == "yearly"}
                onChange={handleAnnualChange}
              />
              <label htmlFor="yearly">Yearly</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Summary({ profile, handleChangeButton }) {
  const { type, annual, price } = profile.plan;
  const { extras } = profile;

  const total = [price];
  extras.forEach((extra) => {
    total.push(Number(extra.price));
  });

  const sum = total.reduce((x, y) => x + y);

  

  return (
    <div className="summary">
      <div className="header">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="review">
        <ul>
          <li className="plan">
            <div className="wrapper">
              <h3>
                {type} ({annual})
              </h3>
              <button onClick={handleChangeButton}>Change</button>
            </div>
            <div>
              <h3>
                ${price}/{annual == "yearly" ? "yr" : "mo"}
              </h3>
            </div>
          </li>

          {extras.map((addOn) => {
            return (
              <li className="extra" key={addOn.name}>
                <div className="top">
                  <p>{addOn.name}</p>
                </div>
                <div className="bottom">
                  <p>
                    ${addOn.price}/{annual == "yearly" ? "yr" : "mo"}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="total">
          <p className="name">
            Total{" "}
            <span>
              ({profile.plan.annual == "monthly" ? "per month" : "per year"})
            </span>
          </p>
          <h3 className="price">
            ${sum}/${profile.plan.annual == "monthly" ? "mo" : "yr"}
          </h3>
        </div>
      </div>
    </div>
  );
}

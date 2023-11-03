import { useState, useEffect } from "react";
import Personal from "./components/Personal";
import Plan from "./components/Plann";
import Summary from "./components/Summary";
import Add from "./components/Add";
import Thanks from "./components/Thanks";

function App() {
  const [checked, setChecked] = useState("your-info");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    plan: {
      type: "",
      annual: "monthly",
      price: 0,
    },
    // extras: {
    //   onlineService: false,
    //   largerStorage: false,
    //   customizableProfile: false,
    // },
    extras: [],
  });


  // useEffect(() => {
  //   const form = document.getElementById("profileForm");

  //   // Set a timeout to submit the form after 1000 milliseconds (1 second)
  //   const timeoutId = setTimeout(() => {
  //     form.submit(); // Submit the form
  //   }, 1000);

  //   // Clear the timeout if the component unmounts before the timeout completes
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [submit]);

  

  const handleChange = (e) => {
    // setChecked(() => e.target.value);
    return;
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log(profile);
    if (checked === "your-info") {
      // Check if all inputs in the profile are filled
      if (profile.name && profile.email && profile.phone) {
        setChecked(() => "select-plan");
      } else {
        // Alert the user to fill out all fields in the profile
        alert("Please fill out all fields in your profile.");
      }
    } else if (checked === "select-plan") {
      // Check if plan type and annual payment option are chosen
      if (profile.plan.type && profile.plan.annual) {
        setChecked(() => "add-ons");
      } else {
        // Alert the user to choose plan type and annual payment option
        alert("Please choose your plan type and payment option.");
      }
    } else if (checked === "add-ons") {
      // You can add additional validation logic for extras if needed
      setChecked(() => "summary");
    } else if (checked === "summary") {
      setChecked(() => "Thanks");
    }
  };

  const handleBack = () => {
    checked === "summary"
      ? setChecked(() => "add-ons")
      : checked === "add-ons"
      ? setChecked(() => "select-plan")
      : setChecked(() => "your-info");
  };

  const handleChangeButton = () => {
    setChecked(() => "select-plan");
  };

  return (
    <div className="App">
      <div className="column left">
        <form>
          <input
            type="radio"
            id="your-info"
            name="form"
            value="your-info"
            checked={checked === "your-info"}
            onChange={handleChange}
          />
          <label htmlFor="your-info">
            <li className="step-1">
              <div className="number">
                <div>1</div>
              </div>
              <div className="name">
                <div className="step">step 1</div>
                <h4 className="step-name">your info</h4>
              </div>
            </li>
          </label>
          <input
            type="radio"
            id="select-plan"
            name="form"
            value="select-plan"
            checked={checked === "select-plan"}
            onChange={handleChange}
          />
          <label htmlFor="select-plan">
            <li className="step-2">
              <div className="number">
                <div>2</div>
              </div>
              <div className="name">
                <div className="step">step 2</div>
                <h4 className="step-name">select plan</h4>
              </div>
            </li>
          </label>
          <input
            type="radio"
            id="add-ons"
            name="form"
            value="add-ons"
            checked={checked === "add-ons"}
            onChange={handleChange}
          />
          <label htmlFor="add-ons">
            <li className="step-3">
              <div className="number">
                <div>3</div>
              </div>
              <div className="name">
                <div className="step">step 3</div>
                <h4 className="step-name">add-ons</h4>
              </div>
            </li>
          </label>
          <input
            type="radio"
            id="summary"
            name="form"
            value="summary"
            checked={checked === "summary"}
            onChange={handleChange}
          />
          <label htmlFor="summary">
            <li className="step-4">
              <div className="number">
                <div>4</div>
              </div>
              <div className="name">
                <div className="step">step 4</div>
                <h4 className="step-name">summary</h4>
              </div>
            </li>
          </label>
        </form>
      </div>
      <div className="column right">
        <div className="preview">
          {checked == "your-info" ? (
            <Personal setProfile={setProfile} profile={profile} />
          ) : checked == "select-plan" ? (
            <Plan setProfile={setProfile} profile={profile} />
          ) : checked == "add-ons" ? (
            <Add setProfile={setProfile} profile={profile} />
          ) : checked == "summary" ? (
            <Summary
              profile={profile}
              handleChangeButton={handleChangeButton}
            />
          ) : (
            <Thanks profile={profile} />
          )}
        </div>
        <div className="buttons">
          <div className="back">
            <button
              onClick={handleBack}
              disabled={checked === "your-info" || checked === "Thanks"}
            >
              Go Back
            </button>
          </div>
          <div className="next">
            <button onClick={handleNext} disabled={checked === "Thanks"}>
              {checked === "summary" ? "Confirm" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import thankYou from "../assets/images/icon-thank-you.svg";
export default function Thanks({ profile }) {
  useEffect(() => {
    const form = document.getElementById("profileForm");

    // Prevent default form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle the form submission here if needed
    };

    // Add event listener for form submission
    form.addEventListener("submit", handleSubmit);

    // Submit the form after 1000 milliseconds (1 second)
    const timeoutId = setTimeout(() => {
      form.submit(); // Submit the form
    }, 5000);

    // Clear the timeout and remove event listener if the component unmounts before the timeout completes
    return () => {
      clearTimeout(timeoutId);
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <div className="thanks">
      <form action="" className="hidden" id="profileForm">
        <input type="text" value={profile} id="profile" readOnly />
        <button type="submit">Submit</button>
      </form>
      <div className="wrapper">
        <div className="icon">
          <img src={thankYou} alt="thank you" />
        </div>
        <div className="thank">
          <h3>Thank you!</h3>
        </div>
        <div className="message">
          <p>
            Thanks For confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}

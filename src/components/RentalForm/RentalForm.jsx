import React, { useState } from "react";
import SelfDrive from "./SelfDrive";
import WithDriver from "./WithDriver";
import "./RentalForm.css"
const RentalForm = () => {
  const [form, setForm] = useState(null); // No default value

  const renderComponent = () => {
    switch (form) {
      case "self-drive":
        
        return <SelfDrive />;
      case "with-driver":
        return <WithDriver />;
      default:
        return null; // Nothing shown initially
    }
  };

  return (
    <div className="rental-form-main-div">
      <h1>ZikRme – Car Rental Form</h1>
      <p>Fill out the form below to proceed</p>

      <div className="rental-form-div">
        <form>
          <table className="rental-form-table">
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Personal Details</strong>
                </td>
              </tr>
              <tr>
                <td>Full Name</td>
                <td>
                  <input
                    className="input-field"
                    type="text"
                    name="fullName"
                    placeholder="Enter name"
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>
                  <input
                    type="number"
                    name="mobileNumber"
                    placeholder="Enter mobile number"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email ID"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Pickup Date & Time</td>
                <td>
                  <input
                    type="datetime-local"
                    name="pickupDateTime"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Rental Type</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name="rentalType"
                      value="Self Drive"
                      onChange={() => setForm("self-drive")}
                      className="rental-type-radio"
                    />
                    Self Drive
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="rentalType"
                      value="With Driver"
                      onChange={() => setForm("with-driver")}
                      className="rental-type-radio"
                    />
                    With Driver
                  </label>
                </td>
              </tr>

              {form && (
                <tr>
                  <td colSpan="2">{renderComponent()}</td>
                </tr>
              )}

              <tr>
                <td colSpan="2">
                  <input type="submit" value="Submit" className="submit-btn" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default RentalForm;

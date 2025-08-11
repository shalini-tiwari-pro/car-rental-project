import React from "react";
import "./CabForm.css";

const CabForm = () => {
  return (
    <div className="cab-form-main-div">
      <h1>ZikRme – Cab Booking Form</h1>
      <p>Fill Out the Form Below to Proceed</p>
      <div className="form-div">
        <form>
          <table className="cab-form-table">
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
                    type="text"
                    name="fullName"
                    placeholder="Enter name"
                    className="input-field"
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
                <td colSpan="2">
                  <strong>Travel Information</strong>
                </td>
              </tr>
              <tr>
                <td>Pickup Location</td>
                <td>
                  <input
                    type="text"
                    name="pickupLocation"
                    placeholder="Enter pickup location"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Drop Location</td>
                <td>
                  <input
                    type="text"
                    name="dropLocation"
                    placeholder="Enter drop location"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Trip Type</td>
                <td>
                  <select>
                    <option value=""> One</option>
                    <option value="model1"> Round Trip</option>
                    <option value="model2"> Local City</option>
                    <option value="model3"> OutStation</option>
                    <option value="model3"> Airport</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Cab Type</td>
                <td>
                  <select>
                    <option value=""> Hatchback</option>
                    <option value="model1"> Sedan</option>
                    <option value="model2">SUV</option>
                    <option value="model3"> Tempo Traveller</option>
                    <option value="model3"> Luxury Car</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>No. of Passengers</td>
                <td>
                  <input
                    type="text"
                    name="passengers"
                    placeholder="Enter number of passengers"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>AC Preference</td>
                <td>
                  <label>
                    <input type="radio" name="acPreference" value="AC" /> AC
                  </label>
                  <br />
                  <label>
                    <input type="radio" name="acPreference" value="Non AC" />{" "}
                    Non AC
                  </label>
                </td>
              </tr>
              <tr>
                <td>Special Instructions (Optional)</td>
                <td>
                  <textarea
                    className="input-field message-box"
                    name="instructions"
                    rows="4"
                    placeholder="Enter special instructions if any"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>Payment Mode:</td>
                <td>
                  <select>
                    <option value="">QR</option>
                    <option value="model1"> UPI</option>
                    <option value="model2"> Card</option>
                    <option value="model3">Net Banking</option>
                    <option value="model3">Wallets</option>
                    <option value="model3">Pay</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Agreement</td>
                <td>
                  <label>
                    <input type="checkbox" value="agreement" name="agreement" />{" "}
                    I agree to ZikRme’s terms and policies.
                  </label>
                </td>
              </tr>
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

export default CabForm;

import React from "react";
import "./BikeForm.css";

const BikeForm = () => {
  return (
    <div className="bike-form-main-div">
      <h1>ZikRme – Cab Booking Form</h1>
      <p>Fill Out the Form Below to Proceed</p>
      <div className="form-div">
        <form>
          <table>
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
                <td>Age</td>
                <td>
                  <input
                    type="number"
                    name="age"
                    placeholder="enter your age"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>
                  <input type="radio" name="gender" />
                  Male
                  <input type="radio" name="gender" />
                  Female
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <textarea
                    placeholder="enter your address"
                    className="message-box"
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <strong>Rental Details</strong>
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
                <td>Drop Date & Time</td>
                <td>
                  <input
                    type="datetime-local"
                    name="pickupDateTime"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Rental Duration</td>
                <td>
                  <input
                    type="text"
                    placeholder="days/hours"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Bike Category</td>
                <td>
                  <select className="input-field">
                    <option>Scooty</option>
                    <option>Standard Bike</option>
                    <option>Cruiser</option>
                    <option>Sports</option>
                    <option>Electric</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Helmet Needed</td>
                <td>
                  <select className="input-field">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Luggage Carrier Needed</td>
                <td>
                  <select className="input-field">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Preferred Model</td>
                <td>
                  <input
                    type="text"
                    placeholder="enter if any"
                    className="input-field"
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <strong>Documents Upload</strong>
                </td>
              </tr>
              <tr>
                <td>Aadhar / Passport / Govt. ID</td>
                <td>
                  <input type="file" placeholder="uplode file here" />
                </td>
              </tr>
              <tr>
                <td>Driving License (Front & Back)</td>
                <td>
                  <input type="file" placeholder="uplode file here" />
                </td>
              </tr>
              <tr>
                <td>Selfie with holding ID Proof</td>
                <td>
                  <input type="file" placeholder="uplode file here" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Payment Information</strong>
                </td>
              </tr>
              <tr>
                <td>Payment will be made after confirmation.</td>
              </tr>
              <tr>
                <td>
                  Our team will verify your details and availability first.
                </td>
              </tr>
              <tr>
                <td>
                  Once confirmed, payment instructions will be shared by
                  email/WhatsApp.
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Terms & Conditions</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />I agree to
                </td>
                <td>
                  <tr>
                    <td>Return the bike to the same pickup hub</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Accept responsibility for damages during rental.</td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Carry my valid driving license during use.</td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Confirmation</strong>
                </td>
              </tr>
              <tr>
                <td>Name</td>
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
                <td>Booking Date</td>
                <td>
                  <input
                    type="date"
                    name="bookingTime"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Referral Code</td>
                <td>
                  <input
                    type="text"
                    name="code"
                    placeholder="Enter code"
                    className="input-field"
                  />
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

export default BikeForm;

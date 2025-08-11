import React from "react";
import "./WithDriver.css"
const WithDriver = () => {
  return (
    <div className="with-driver-form-main-div">
      <div className="with-driver-form-div">
        <form>
          <table>
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Car Details</strong>
                </td>
              </tr>

              <tr>
                <td>Car Type:</td>
                <td>
                  <select>
                    <option value="">Sedan</option>
                    <option value="model1">SUV</option>
                    <option value="model2"> Tempo Traveller</option>
                    <option value="model3">Luxury</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>AC/Non-AC:</td>
                <td>
                  <select>
                    <option>AC</option>
                    <option>Non AC</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>No. of Passengers:</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter number of passengers"
                    className="input-field text with-driver-input"
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <strong>Travel Info</strong>
                </td>
              </tr>

              <tr>
                <td>No. of Days:</td>
                <td>
                  <input
                    type="text"
                    name="Days"
                    placeholder="Number of days"
                    className="input-field text with-driver-input"
                  />
                </td>
              </tr>

              <tr>
                <td>Trip Purpose:</td>
                <td>
                  <textarea
                    placeholder="Enter trip purpose"
                    className="input-field message-box with-driver-input"
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td>Travel Dates:</td>
                <td>
                  <label>From:</label>
                  <input
                    type="datetime-local"
                    className="with-driver-input"
                  />{" "}
                  <br />
                  <label>To:</label>
                  <input type="datetime-local" className="with-driver-input" />
                </td>
              </tr>

              <tr>
                <td>Special Requests:</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name="specialRequest"
                      className="with-driver-input"
                    />{" "}
                    Hill station or city ride
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="specialRequest"
                      className="with-driver-input"
                    />{" "}
                    Baby seat
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="specialRequest"
                      className="with-driver-input"
                    />{" "}
                    Other
                  </label>
                  <br />
                  <textarea
                    placeholder="Other requests "
                    className="message-box with-driver-input"
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <strong>Estimate & Payment</strong>
                </td>
              </tr>

              <tr>
                <td>Estimate:</td>
                <td>Estimate shared after review</td>
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
                <td colSpan="2">
                  <label>
                    <input
                      type="checkbox"
                      name="agreement"
                      className="with-driver-input"
                    />{" "}
                    I agree to ZikRme Rental Terms and Conditions.
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default WithDriver;

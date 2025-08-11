import React from "react";
import "./SelfDrive.css"
const SelfDrive = () => {
  return (
    <div className="self-drive-form-main-div">
      <div className="self-drive-form-div">
        <form>
          <table>
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Document Upload</strong>
                </td>
              </tr>
              <tr>
                <td>Driving License:</td>
                <td>
                  <input
                    type="file"
                    name="drivingLicense"
                    placeholder="Upload Driving License"
                  />
                </td>
              </tr>
              <tr>
                <td>Government ID Proof (Aadhaar / PAN):</td>
                <td>
                  <input
                    type="file"
                    name="governmentID"
                    placeholder="Upload Government ID"
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <strong>Vehicle Selection</strong>
                </td>
              </tr>
              <tr>
                <td>Vehicle Type:</td>
                <td>
                  <label>
                    <input type="checkbox" name="vehicleType" value="Car" /> Car
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" name="vehicleType" value="Bike" />{" "}
                    Bike
                  </label>
                </td>
              </tr>
              <tr>
                <td>Vehicle Model:</td>
                <td>
                  <select>
                    <option value="">Select model</option>
                    <option value="model1">Model 1</option>
                    <option value="model2">Model 2</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <strong>Rental Period</strong>
                </td>
              </tr>
              <tr>
                <td>Pickup Date & Time:</td>
                <td>
                  <input
                    type="datetime-local"
                    name="pickupDateTime"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td>Drop Date & Time:</td>
                <td>
                  <input
                    type="datetime-local"
                    name="dropDateTime"
                    className="input-field"
                  />
                </td>
              </tr>

              <tr>
                <td>Add-ons (Optional):</td>
                <td>
                  <select>
                    <option value=""> Helmet</option>
                    <option value="model1"> Phone</option>
                    <option value="model2"> Fuel Preload</option>
                    <option value="model3"> GPS</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <strong>Payment Info</strong>
                </td>
              </tr>
              <tr>
                <td>Security Deposit:</td>
                <td>₹1000–₹5000 (based on vehicle)</td>
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
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default SelfDrive;

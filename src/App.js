
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"

import ExploreMoreCar from "./components/Explorepage/ExploreMoreCar"
import Rental from "./components/Rental/Rental";
import CabService from "./components/Offer/CabService";
import BikeRental from "./components/Offer/BikeRental";
import TourService from "./components/Offer/TourService";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermCondition from "./components/TermCondition/TermCondition";
import CabForm from "./components/CabForm/CabForm";
import RentalForm from "./components/RentalForm/RentalForm";
import ViewMoreCab from "./components/ViewMoreCab/ViewMoreCab";
import ContactUs from "./components/ContactUs/ContactUs";
import ExploreMoreBike from "./components/Explorepage/ExploreMoreBike";
import BikeForm from "./components/BikeForm/BikeForm";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exploremorecar" element={<ExploreMoreCar />} />
       
          <Route path="/rental" element={<Rental />} />
          <Route path="/cab" element={<CabService />} />
          <Route path="/bike" element={<BikeRental />} />
          <Route path="/car" element={<TourService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termcondition" element={<TermCondition />} />
          <Route path="/cabform" element={<CabForm />} />
          <Route path="/rentalform" element={<RentalForm />} />
          <Route path="/viewmore" element={<ViewMoreCab />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/exploremorebike" element={<ExploreMoreBike />} />
        <Route path="/bikeform" element={<BikeForm/>}/>
        </Routes>
    
      </div>
      <br/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import roundtrip from "../../assets/roundtrip.jpg";
import airport from "../../assets/airport.jpg";
import local from "../../assets/local.jpg";
import oneway from "../../assets/oneway.jpg";
import expert from "../../assets/expert.png";
import safety from "../../assets/safety.png";
import stop from "../../assets/stop.png";
import route from "../../assets/route.png";
import money from "../../assets/money.png";
import reliable from "../../assets/reliable.png";
import taxirant from "../../assets/taxirant.png";
import "./Service.css";

const serviceobj = [
  {
    image: roundtrip,
    name: "Roundtrip Cabs",
    info:
      "Our premium round‑trip service will pamper you with an absolutely " +
      "comfortable drive from your doorsteps and back. Our chauffeurs are not " +
      "only courteous but also expert travel companions that will make your " +
      "road travel memorable — affordable luxury, as we like to call it.",
    iconsData: [
      { icon: expert, iconName: "Expert chauffeurs" },
      { icon: safety, iconName: "Safety certified" },
      { icon: stop, iconName: "Multiple stops" },
    ],
  },
  {
    image: oneway,
    name: "Oneway Drops",
    info:
      "Our network of over 1.5 lakh one‑way routes ensures there is no corner " +
      "of the country you can't travel with us. Pay only one‑side charges at " +
      "rock‑bottom rates — if you need to be somewhere, we'll get you there.",
    iconsData: [
      { icon: route, iconName: "15 lakh routes" },
      { icon: money, iconName: "Lowest Fares" },
      { icon: money, iconName: "All inclusive Prices" },
    ],
  },
  {
    image: local,
    name: "Local Rental",
    info:
      "Book our flexible hourly rental cabs and get chauffeured within the city " +
      "for your business meetings or shopping chores. Our local rentals are " +
      "available for 4, 8 or 12 hours — explore your city like a local.",
    iconsData: [
      { icon: money, iconName: "Flexible Package" },
      { icon: reliable, iconName: "Cab At Your Disposal" },
      { icon: stop, iconName: "Multiple stops" },
    ],
  },
  {
    image: airport,
    name: "Airport Transfers",
    info:
      "We care about your flight as much as you do. Our airport‑transfer service " +
      "offers reliable pickups and drops across India. Book in advance and rest easy.",
    iconsData: [
      { icon:taxirant , iconName: "Reliability Guaranteed" },
      { icon: money, iconName: "Lowest Fares" },
      { icon: expert, iconName: "Courteous chauffeurs" },
    ],
  },
];

const Service = () => (
  <section className="service">
    <h1 className="service-h1">Our Services</h1>

    <div className="service-main-div">
      {serviceobj.map(({ image, name, info, iconsData }, i) => (
        <div className="service-card" key={i}>
          <img src={image} alt={name} className="service-image" />
          <h2>{name}</h2>
          <p className="info">{info}</p>

          {iconsData?.length > 0 && (
            <div className="service-icons">
              {iconsData.map(({ icon, iconName }, j) => (
                <div key={j} className="service-icon-card" >
                  <div className="icon-image-div">
                    <img src={icon} alt={iconName} className="icon-image" />
                  </div>
                  <p>{iconName}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Service;

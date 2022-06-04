import React, { useEffect, useState } from "react";
import Axios from "axios";
import HeroSubSection from "./HeroSubSection";

const HeroSection = () => {

  const [hero, setHero] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/home-get").then((res) =>
    setHero(res.data),
    );
  }, []);

  return (
    <>
    {hero.map((value, index) => (
      <HeroSubSection 
        key={index}
        heroMainHeading={value.heroSection.heroMainHeading} 
        herofirstbtn={value.heroSection.herofirstbtn}
        herofirstbtnUrl={value.heroSection.herofirstbtnUrl}
        herosecondbtn={value.heroSection.herosecondbtn}
        herosecondbtnUrl={value.heroSection.herosecondbtnUrl}
        herovideoimage={value.heroSection.herovideoimage}
        herosubheading={value.heroSection.herosubheading}
        heropera={value.heroSection.heropera}
      />
    ))}
    </>
  );
};

export default HeroSection;

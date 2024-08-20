import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context";
// images
import Clear from "../assets/images/Clear.jpg";
import Fog from "../assets/images/fog.png";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Windy from "../assets/images/windy.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      const imageString = weather.conditions.toLowerCase(); 


      if (
        
        imageString.includes("snow") ||
        imageString.includes("snow showers") ||
        imageString.includes("light snow") ||
        imageString.includes("heavy snow") ||
        imageString.includes("sleet")
      ) {
        setImage(Snow);
      } else if (
        
        imageString.includes("mostly clear") ||
        imageString.includes("partially cloudy")
      ) {
        setImage(Cloudy);
      } else if (
        imageString.includes("rain") ||
        imageString.includes("showers") ||
        imageString.includes("drizzle") ||
        imageString.includes("light rain") ||
        imageString.includes("heavy rain")
      ) {
        setImage(Rainy);
      } else if (
        imageString.includes("cloudy") ||
        imageString.includes("mostly cloudy") ||
        imageString.includes("overcast")
      ) {
        setImage(Cloudy);
      } else if (
        imageString.includes("fog") ||
        imageString.includes("mist") ||
        imageString.includes("haze")
      ) {
        setImage(Fog);
      } else if (
        imageString.includes("thunderstorm") ||
        imageString.includes("thunder") ||
        imageString.includes("severe thunderstorm") ||
        imageString.includes("lightning")
      ) {
        setImage(Stormy);
      } else if (
        imageString.includes("windy") ||
        imageString.includes("breezy")
      ) {
        setImage(Windy);
      } else {
        setImage(Clear); // Default if no match
      }
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="weather_image"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;

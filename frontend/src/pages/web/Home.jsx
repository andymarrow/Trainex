// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { IoRestaurant } from "react-icons/io5";
import SearchComponent from "../../components/common/search/Search";
import RestaurantCards from "../../components/common/search-card/SearchCard";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  // Fetch restaurant profile data
  const { get: fetchRestaurant } = useFetch("/publicApi/restaurant", {
    setLoading,
    setError,
    setData: setResponse,
  });

  useEffect(() => {
    fetchRestaurant();
  }, []);
  useEffect(() => {
    console.log("--restaurants home", restaurants);
  }, []);

  useEffect(() => {
    console.log("--response home", response);

    if (response && response.restaurants) {
      setRestaurants(response.restaurants);
      setDisplayedRestaurants(response.restaurants.slice(0, 6)); // Set initial 6 restaurants
    }
  }, [response]);

  const handleSearch = (query) => {
    if (!query) {
      // If search query is cleared, display the initial 6 restaurants
      setDisplayedRestaurants(restaurants.slice(0, 6));
      return;
    }

    const results = restaurants
      .filter(
        (restaurant) =>
          restaurant.name?.toLowerCase().includes(query.toLowerCase()) ||
          restaurant.Menus?.some((food) =>
            food.title?.toLowerCase().includes(query.toLowerCase())
          )
      )
      .sort((a, b) => {
        const exactMatchA = a.name.toLowerCase() === query.toLowerCase();
        const exactMatchB = b.name.toLowerCase() === query.toLowerCase();
        return exactMatchB - exactMatchA; // Prioritize exact matches
      });

    setDisplayedRestaurants(results);
  };

  const handleNearest = (userLocation) => {
    if (!userLocation) return;

    const getDistance = (lat1, lon1, lat2, lon2) => {
      // Haversine formula
      const R = 6371; // Radius of the earth in km
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    const sortedRestaurants = [...restaurants]
      .map((restaurant) => ({
        ...restaurant,
        distance: getDistance(
          userLocation.latitude,
          userLocation.longitude,
          parseFloat(restaurant.latitude),
          parseFloat(restaurant.longitude)
        ),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 10);

    setDisplayedRestaurants(sortedRestaurants);
  };

  const user = true;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-all duration-500">
      <Navbar />
      <>
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide select-none bg-gradient-to-r from-black to-gray-500 dark:from-gray-500 dark:to-white text-transparent bg-clip-text">
            <span className="bg-gradient-to-r from-black to-gray-500 dark:from-gray-500 dark:to-white text-transparent bg-clip-text">
              Find Your Desired
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
              {" "}
              Restaurant
            </span>
          </h1>

          <div className="flex justify-center text-center text-9xl mt-10 select-none">
            <IoRestaurant />
          </div>

          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            <strong>
              Join us and make dining out more convenient and enjoyable!
            </strong>
          </p>
          {user ? (
            <div className="my-10 text-3xl"> Explore below </div>
          ) : (
            <div className="flex justify-center my-10">
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-4 mx-3 rounded-md"
              >
                Log In
              </a>
              <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Sign Up
              </a>
            </div>
          )}
        </div>
        <div>
          <SearchComponent
            onSearch={handleSearch}
            onNearest={handleNearest}
            setUserLocation={setUserLocation}
          />
        </div>
        <RestaurantCards restaurants={displayedRestaurants} />
      </>
      <Footer />
    </div>
  );
};

export default Home;

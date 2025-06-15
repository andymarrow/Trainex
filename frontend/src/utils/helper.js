// utils/distance.js
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
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
export const convertToDisplayDate = (date) => {
  const dateObj = new Date(date);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(dateObj);
};
// export const checkAndNavigate = (location, navigate) => {
//   const lastUrl = localStorage.getItem("lastUrl");
//   const token = localStorage.getItem("accessToken");
//   if (!token && lastUrl?.includes("/app")) {
//     return navigate("/login");
//   }
//   navigate(lastUrl || "/");
// };
export const checkAndNavigate = (navigate, location) => {
  if (location) return navigate(`${location}`);
  const lastUrl = localStorage.getItem("lastUrl");
  const token = localStorage.getItem("accessToken");
  if (!token && lastUrl?.includes("/app")) {
    return navigate("/app/restaurantOwner/manageRestaurant");
  }
  navigate(lastUrl || "/");
};

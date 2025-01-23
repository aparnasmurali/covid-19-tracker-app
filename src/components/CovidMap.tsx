// import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Import necessary components
// import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS
// import L from "leaflet"; // Leaflet for icons
// import axios from "axios";

// // Fix Leaflet marker icon issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// interface StateData {
//   state: string;
//   confirmed: number;
//   active: number;
//   recovered: number;
//   deaths: number;
//   coordinates: { lat: number; lng: number };
// }

// const CovidStatsMap: React.FC = () => {
//   const [covidData, setCovidData] = useState<StateData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCovidData = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.rootnet.in/covid19-in/stats/latest"
//         );
//         const regionalData = response.data.data.regional;

//         // Map data with dummy coordinates (replace with dynamic fetch if needed)
//         const formattedData = regionalData.map((item: any) => ({
//           state: item.loc,
//           confirmed: item.totalConfirmed,
//           active: item.totalConfirmed - item.discharged - item.deaths,
//           recovered: item.discharged,
//           deaths: item.deaths,
//           coordinates: { lat: 20.5937, lng: 78.9629 }, // Replace with dynamic coordinates for each state
//         }));

//         setCovidData(formattedData);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch data");
//         setLoading(false);
//       }
//     };

//     fetchCovidData();
//   }, []);

//   if (loading) {
//     return <div className="text-center mt-5">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-danger mt-5">{error}</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <h3 className="text-center">COVID-19 Cases Map</h3>
//       <MapContainer
//         center={[20.5937, 78.9629]} // Center the map on India
//         zoom={5} // Adjust zoom level
//         style={{ height: "500px", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {covidData.map((stateData, index) => (
//           <Marker
//             key={index}
//             position={[stateData.coordinates.lat, stateData.coordinates.lng]}
//           >
//             <Popup>
//               <div>
//                 <h5>{stateData.state}</h5>
//                 <p>Confirmed: {stateData.confirmed}</p>
//                 <p>Active: {stateData.active}</p>
//                 <p>Recovered: {stateData.recovered}</p>
//                 <p>Deaths: {stateData.deaths}</p>
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default CovidStatsMap;

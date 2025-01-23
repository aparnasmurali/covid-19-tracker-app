import axios from "axios";

// Define state coordinates for mapping
const stateCoordinates: { [key: string]: { lat: number; lng: number } } = {
  Maharashtra: { lat: 19.7515, lng: 75.7139 },
  Kerala: { lat: 10.8505, lng: 76.2711 },
  Karnataka: { lat: 15.3173, lng: 75.7139 },
  TamilNadu: { lat: 11.1271, lng: 78.6569 },
  Delhi: { lat: 28.7041, lng: 77.1025 },
  UttarPradesh: { lat: 26.8467, lng: 80.9462 },
  // Add coordinates for other states...
};

export interface StateData {
  state: string;
  confirmed: number;
  active: number;
  recovered: number;
  deaths: number;
  latitude: number;
  longitude: number;
}

// Fetch COVID-19 data and map state data
export const fetchCovidData = async (): Promise<StateData[]> => {
  try {
    const response = await axios.get("https://api.rootnet.in/covid19-in/stats/latest");
    const regionalData = response.data.data.regional;

    // Format the data to include coordinates
    const formattedData: StateData[] = regionalData.map((item: any) => ({
      state: item.loc,
      confirmed: item.totalConfirmed,
      active: item.totalConfirmed - item.discharged - item.deaths,
      recovered: item.discharged,
      deaths: item.deaths,
      latitude: stateCoordinates[item.loc]?.lat || 0, // Default to 0 if coordinates are missing
      longitude: stateCoordinates[item.loc]?.lng || 0,
    }));

    return formattedData;
  } catch (error) {
    console.error("Error fetching COVID data:", error);
    throw new Error("Failed to fetch COVID-19 data.");
  }
};

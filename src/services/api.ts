import axios from "axios";
import { StateData } from "../types/StateData";

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
    }));

    return formattedData;
  } catch (error) {
    console.error("Error fetching COVID data:", error);
    throw new Error("Failed to fetch COVID-19 data.");
  }
};

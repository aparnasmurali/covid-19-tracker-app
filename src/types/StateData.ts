export interface StateData {
    state: string;
    confirmed: number;
    active: number;
    recovered: number;
    deaths: number;
  }

  export interface CovidCardProps {
    title: string;
    value: number | undefined;
  }

  export interface LineChartProps {
    data: {
      state: string;
      confirmed: number;
      active: number;
      recovered: number;
      deaths: number;
    }[];
    selectedState: string;
  }

  export interface PieChartProps {
    totalActive: number;
    totalRecovered: number;
    totalDeaths: number;
    selectedState: string;
  }

  export interface StateSelectorProps {
    states: string[];
    selectedState: string;
    onStateChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
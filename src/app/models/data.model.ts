export interface DataState {
  data: Charts[];
  isLoading: boolean;
}

export interface Charts {
  title: string;
  data: ChartData[];
}

export interface ChartData {
  value: string;
  date: Date;
}

import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api"

interface ICoinHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
  }
interface ChartProps{
  coinId : string;
}
function Chart({coinId} : ChartProps){
  const {isLoading, data} = useQuery(["ohlcv",coinId], ()=>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart </h1>
}

export default Chart;  
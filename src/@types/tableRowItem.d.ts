declare module "CoinProps" {
  export interface CoinProps {
    market_cap_rank: number;
    id: string;
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_1h_in_currency: number;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
    total_volume: number;
    market_cap: number;
    circulating_supply: number;
    total_supply: number;
    sparkline_in_7d: { price: number[] };
  }
}

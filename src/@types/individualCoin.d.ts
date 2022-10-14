declare module "IndividualCoinProps" {
  export interface IndividualCoinProps {
    market_cap_rank: number;
    market_data: {
      total_volume: { string: number };
      current_price: { string: number };
      total_supply: number;
      circulating_supply: number;
      market_cap: { string: number };
      market_cap_change_percentage_24h_in_currency: { string: number };
      fully_diluted_valuation: { string: number };
      price_change_24h_in_currency: { string: number };
      price_change_percentage_24h: number;
      ath: { string: number };
      ath_date: { string: string };
      atl: { string: number };
      atl_date: { string: string };
    };
    symbol: string;
    id: string;
    name: string;
    image: { small: string };
    links: { homepage: string[] };
    description: { en: string };
  }
}

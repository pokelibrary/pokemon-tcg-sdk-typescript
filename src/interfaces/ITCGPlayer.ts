import { IPrice } from './IPrice';

export interface ITCGPlayer {
  prices: {
    holofoil?: IPrice;
    normal?: IPrice;
    reverseHolofoil?: IPrice;
  };
  updatedAt: string;
  url: string;
}

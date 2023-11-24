export interface StatusDelivery {
  Code: number;
  Status: string;
  StatusDate: string;
  Description: string;
  type: string;
}

export interface DataTracking {
  DeliveryNumber?: string;
  ShipFromCity: string;
  ShipToCity: string;
  ShipToAddress: string;
  ShipToNeighborhood: string;
  ShipToName: string;
  ShipToPhoneNumber: string;
  WeightKg: string;
  StatusDelivery: StatusDelivery[];
}

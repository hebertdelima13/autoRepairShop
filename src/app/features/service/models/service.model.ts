export interface ServiceModel {
  _id: string;
  title: string;
  start: string;
  startHour: string;
  end: string;
  endHour: string;
  services: string;
  price: number;
  finished: boolean;
  paid: boolean;
}

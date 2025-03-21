export interface StampDetail {
  id: number;
  name: string;
  type: string;
  address: string;
  zipcode: string;
  country: string;
  state: string;
  city: string;
  phone: string;
  image_url_1: string;
  image_url_2: string;
  bonus_image_url: string;
  trivia_1: string;
  trivia_2?: string;
  trivia_3?: string;
  website_url: string;
  description: string;
  qrcode: string;
  tabistore_item_id?: number;
}

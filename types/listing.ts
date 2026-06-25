export type Listing = {
  slug: string;
  title: string;
  city: string;
  country: string;
  location: string;
  tag: string;
  price: string;
  rating: number;
  reviews: number;
  capacity: number;
  beds: number;
  baths: number;
  availability: string;
  summary: string;
  description: string;
  host: string;
  hostStatus: string;
  amenities: string[];
  benefits: string[];
  coordinates: {
    x: number;
    y: number;
  };
  cover: string;
  gallery: string[];
};

export type TrendSection = {
  slug: string;
  title: string;
  description: string;
  listingSlugs: string[];
};

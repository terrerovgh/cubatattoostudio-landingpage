export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  profileImage: string;
  portfolio: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    location: string;
  };
  services: {
    title: string;
    items: Service[];
  };
  artists: Artist[];
  gallery: {
    title: string;
    images: string[];
  };
  booking: {
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
  };
  footer: {
    copyright: string;
  };
}
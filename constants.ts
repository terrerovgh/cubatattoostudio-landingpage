import { SiteContent } from './types';

// ==========================================
// CONTENT MANAGEMENT SYSTEM (Simulated)
// Edit the content below to update the website.
// ==========================================

export const CONTENT: SiteContent = {
  hero: {
    title: "CUBA TATTOO STUDIO",
    subtitle: "Ink is the only thing you take to the grave.",
    location: "ALBUQUERQUE, NM",
  },
  services: {
    title: "OUR CRAFT",
    items: [
      {
        id: "s1",
        title: "Custom Design",
        description: "We don't just copy; we create. Bring your concept, and we will translate it into a unique piece of art tailored to your anatomy and story.",
        image: "https://picsum.photos/id/20/800/600",
      },
      {
        id: "s2",
        title: "Black & Grey Realism",
        description: "Mastering the gradient of shadows. Our specialization involves high-contrast, photorealistic portraits and surrealism that stands the test of time.",
        image: "https://picsum.photos/id/36/800/600",
      },
      {
        id: "s3",
        title: "Cover Ups",
        description: "Mistakes happen. We specialize in transforming old, unwanted ink into masterpieces you will be proud to wear.",
        image: "https://picsum.photos/id/91/800/600",
      }
    ]
  },
  artists: [
    {
      id: "david",
      name: "DAVID",
      role: "Lead Artist / Founder",
      bio: "David brings over 15 years of fine art experience to the skin. Specializing in large-scale bio-mechanical and dark surrealism, his work is intense, detailed, and uncompromising. He founded Cuba Tattoo Studio to create a space dedicated to pure artistic expression.",
      profileImage: "https://picsum.photos/id/338/600/800",
      portfolio: [
        "https://picsum.photos/id/237/500/500",
        "https://picsum.photos/id/238/500/500",
        "https://picsum.photos/id/239/500/500",
      ]
    },
    {
      id: "nina",
      name: "NINA",
      role: "Fine Line Specialist",
      bio: "Delicate. Precise. Eternal. Nina's hand is steady as a rock. She focuses on micro-realism, fine-line botanical work, and geometric patterns. Her approach is gentle, but her impact is heavy.",
      profileImage: "https://picsum.photos/id/334/600/800",
      portfolio: [
        "https://picsum.photos/id/240/500/500",
        "https://picsum.photos/id/241/500/500",
        "https://picsum.photos/id/242/500/500",
      ]
    },
    {
      id: "karli",
      name: "KARLI",
      role: "Neotraditional Artist",
      bio: "Karli bridges the gap between old school bold lines and modern color theory. While the studio is black and white, her mind explodes with composition. She is the master of illustrative storytelling on skin.",
      profileImage: "https://picsum.photos/id/325/600/800",
      portfolio: [
        "https://picsum.photos/id/243/500/500",
        "https://picsum.photos/id/244/500/500",
        "https://picsum.photos/id/245/500/500",
      ]
    }
  ],
  gallery: {
    title: "STUDIO GALLERY",
    images: [
       "https://picsum.photos/id/100/600/800",
       "https://picsum.photos/id/101/600/800",
       "https://picsum.photos/id/102/800/600",
       "https://picsum.photos/id/103/600/800",
       "https://picsum.photos/id/104/600/600",
       "https://picsum.photos/id/106/600/800",
    ]
  },
  booking: {
    title: "BOOK YOUR SESSION",
    description: "We operate by appointment only. A non-refundable deposit is required to secure your date. Tell us your idea, placement, and size estimates.",
    email: "booking@cubatattoo.com",
    phone: "+1 (505) 555-0199",
    address: "4200 Central Ave SE, Albuquerque, NM 87108"
  },
  footer: {
    copyright: "© 2024 Cuba Tattoo Studio. All rights reserved."
  }
};
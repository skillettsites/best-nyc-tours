export interface Tour {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  excerpt: string;
  price: number;
  currency: string;
  duration: string;
  rating: number;
  reviewCount: number;
  imageAlt: string;
  imageUrl: string;
  categories: string[];
  highlights: string[];
  includes: string[];
  bestFor: string[];
  gygTourId: string;
  affiliateUrl: string;
  faqs: FAQ[];
  relatedSlugs: string[];
  /**
   * Live GetYourGuide cancellation terms for this exact activity, verified against the
   * product page. Omitted means the standard free cancellation up to 24 hours before.
   */
  cancellationPolicy?: 'free-24h' | 'free-3d' | 'non-refundable';
}

export interface Category {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  excerpt: string;
  icon: string;
  tourSlugs: string[];
  faqs: FAQ[];
  answerCapsule?: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  sections: GuideSection[];
  relatedTourSlugs: string[];
  faqs: FAQ[];
  publishedDate: string;
  updatedDate: string;
  answerCapsule?: string;
}

export interface GuideSection {
  heading: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  faqs: FAQ[];
  relatedTourSlugs: string[];
  relatedBlogSlugs: string[];
  publishedDate: string;
  updatedDate: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

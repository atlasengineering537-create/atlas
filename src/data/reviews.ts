export interface GoogleReview {
  id: string;
  name: string;
  isLocalGuide: boolean;
  reviewsCount?: number;
  photosCount?: number;
  rating: number;
  timeAgo: string;
  reviewText: string;
  initials: string;
  avatarBg: string;
  likes?: number;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'review-1',
    name: 'Vinesh Bhatia',
    isLocalGuide: true,
    reviewsCount: 250,
    photosCount: 15,
    rating: 5,
    timeAgo: '9 years ago',
    reviewText: 'Good quality of road construction machinery',
    initials: 'VB',
    avatarBg: 'bg-slate-700',
    likes: 1,
  },
  {
    id: 'review-2',
    name: 'Sandeep Tetarwal',
    isLocalGuide: true,
    reviewsCount: 7,
    photosCount: 1,
    rating: 5,
    timeAgo: '5 years ago',
    reviewText: 'such a good & genuine quality',
    initials: 'ST',
    avatarBg: 'bg-blue-800',
  },
  {
    id: 'review-3',
    name: 'Vny Datniya',
    isLocalGuide: false,
    reviewsCount: 3,
    rating: 5,
    timeAgo: '5 years ago',
    reviewText: 'Very good quality and no1 construction equipment machinerys & satisfied this company.',
    initials: 'V',
    avatarBg: 'bg-[#5b7582]',
  },
];

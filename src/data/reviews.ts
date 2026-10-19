export interface Review {
  id: string;
  name: string;
  avatarText: string;
  rating: number;
  timeAgo: string;
  comment: string;
  verified: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Vinesh Bhatia',
    avatarText: 'VB',
    rating: 5,
    timeAgo: '4 months ago',
    comment: 'Good quality of road construction machinery and satisfied this company.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Sandeep Tetarwal',
    avatarText: 'ST',
    rating: 5,
    timeAgo: '6 months ago',
    comment: 'such a good & genuine quality of bitumen & road equipments with on-time delivery.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Vny Datniya',
    avatarText: 'VD',
    rating: 5,
    timeAgo: '1 year ago',
    comment: 'Very good quality and no1 construction equipment machinerys & satisfied this company.',
    verified: true,
  },
];

export type GigCategory = 'Creative' | 'Tech' | 'Errands' | 'Events' | 'Household' | 'Other';

export interface Gig {
    id: string;
    title: string;
    description: string;
    category: GigCategory;
    price: number;
    location: string;
    isRemote: boolean;
    postedBy: {
        name: string;
        avatar?: string;
        verified: boolean;
    };
    tags: string[];
    postedAt: string; // ISO date
    deadline?: string;
    status: 'Open' | 'In Progress' | 'Completed';
}

export const CATEGORIES: GigCategory[] = ['Creative', 'Tech', 'Errands', 'Events', 'Household', 'Other'];

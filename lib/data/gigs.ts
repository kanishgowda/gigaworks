import { Gig } from "../types";

export const MOCK_GIGS: Gig[] = [
    {
        id: '1',
        title: 'Instagram Post Design for Coffee Shop',
        description: 'Need 5 aesthetic posts for our new cold brew launch. Style needs to be minimal and dark.',
        category: 'Creative',
        price: 1500,
        location: 'Koramangala, Bangalore',
        isRemote: true,
        postedBy: {
            name: 'Brew & Bean',
            verified: true
        },
        tags: ['Canva', 'Social Media', 'Design'],
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        status: 'Open'
    },
    {
        id: '2',
        title: 'Urgent: Parcel Pickup & Delivery',
        description: 'Pick up a package from Indiranagar and deliver to Whitefield. Package is small (documents).',
        category: 'Errands',
        price: 300,
        location: 'Indiranagar -> Whitefield',
        isRemote: false,
        postedBy: {
            name: 'Sarah J.',
            verified: true
        },
        tags: ['Delivery', 'Urgent'],
        postedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        status: 'Open'
    },
    {
        id: '3',
        title: 'React.js Fix on Landing Page',
        description: 'Header is not responsive on mobile. Need someone to fix the CSS/Tailwind config quickly.',
        category: 'Tech',
        price: 2000,
        location: 'Remote',
        isRemote: true,
        postedBy: {
            name: 'TechStart Inc.',
            verified: true
        },
        tags: ['React', 'CSS', 'Bug Fix'],
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        status: 'Open'
    },
    {
        id: '4',
        title: 'Help with Diwali Decorations',
        description: 'Need 2 people to help hang lights and arrange flowers for a house party.',
        category: 'Events',
        price: 1000,
        location: 'Jayanagar, Bangalore',
        isRemote: false,
        postedBy: {
            name: 'Mrs. Rao',
            verified: true
        },
        tags: ['Helper', 'Decoration'],
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        status: 'Open'
    },
    {
        id: '5',
        title: 'Video Edit for YouTube Vlog',
        description: 'Raw footage provided. Need a 10-minute vlog edit with simple transitions and background music.',
        category: 'Creative',
        price: 3500,
        location: 'Remote',
        isRemote: true,
        postedBy: {
            name: 'TravelWithMe',
            verified: false
        },
        tags: ['Premiere Pro', 'Video Editing'],
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
        status: 'Open'
    },
    {
        id: '6',
        title: 'Data Entry - Excel',
        description: 'Digitize 50 handwritten invoices into an Excel sheet.',
        category: 'Other',
        price: 500,
        location: 'Remote',
        isRemote: true,
        postedBy: {
            name: 'Local Store',
            verified: true
        },
        tags: ['Excel', 'Data Entry'],
        postedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
        status: 'Open'
    }
];

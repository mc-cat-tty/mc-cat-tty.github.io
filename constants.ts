import { Project, Note } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Distributed Systems Consensus',
    description: 'A Go implementation of the Raft consensus algorithm, visualizing leader election and log replication in real-time.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['Go', 'Distributed Systems', 'Visualization'],
    link: 'https://github.com/example/raft-vis',
  },
  {
    id: '2',
    title: 'Neural Style Transfer App',
    description: 'Web application allowing users to apply artistic styles to their photos using a pre-trained VGG19 network.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['Python', 'TensorFlow', 'React'],
    link: 'https://github.com/example/style-transfer',
  },
  {
    id: '3',
    title: 'EcoTrack IoT',
    description: 'An IoT solution for monitoring soil moisture and sunlight levels for urban gardens, featuring a mobile dashboard.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['C++', 'IoT', 'Flutter'],
    link: 'https://github.com/example/ecotrack',
  },
  {
    id: '4',
    title: 'Vulkan Rendering Engine',
    description: 'A custom game engine written in C++ using the Vulkan API, supporting PBR lighting and shadow mapping.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['C++', 'Vulkan', 'Graphics'],
    link: 'https://github.com/example/vulkan-engine',
  },
];

export const NOTES: Note[] = [
  {
    id: '1',
    courseTitle: 'Advanced Algorithms',
    description: 'Comprehensive notes on dynamic programming, network flow, and NP-completeness proofs.',
    date: 'Fall 2023',
    downloadUrl: '#',
    size: '2.4 MB',
  },
  {
    id: '2',
    courseTitle: 'Machine Learning Fundamentals',
    description: 'Summary of supervised and unsupervised learning, including derivations for backpropagation.',
    date: 'Spring 2023',
    downloadUrl: '#',
    size: '4.1 MB',
  },
  {
    id: '3',
    courseTitle: 'Operating Systems',
    description: 'Detailed study guides on process management, memory paging, and file systems.',
    date: 'Fall 2022',
    downloadUrl: '#',
    size: '1.8 MB',
  },
  {
    id: '4',
    courseTitle: 'Linear Algebra',
    description: 'Handwritten notes covering vector spaces, eigenvalues, and SVD decomposition.',
    date: 'Spring 2022',
    downloadUrl: '#',
    size: '5.2 MB',
  },
];

export const PERSONAL_INFO = {
  name: "Alex Dillhoff",
  role: "Software Engineer & Researcher",
  bio: "I build robust systems and explore the intersection of distributed computing and AI. I believe in clean code, open knowledge, and the power of simple tools.",
  avatar: "https://picsum.photos/400/400?grayscale",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    strava: "https://strava.com",
  }
};
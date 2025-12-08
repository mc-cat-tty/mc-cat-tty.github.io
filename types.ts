export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  tags: string[];
  imageFit?: 'cover' | 'contain';
}

export interface Note {
  courseTitle: string;
  description: string;
  date: string;
  downloadUrl: string;
  size: string;
}
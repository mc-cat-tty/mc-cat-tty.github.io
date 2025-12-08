export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  tags: string[];
}

export interface Note {
  id: string;
  courseTitle: string;
  description: string;
  date: string;
  downloadUrl: string;
  size: string;
}
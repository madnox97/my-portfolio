export interface VideoProject {
  id: string;
  video_title: string;
  video_description: string;
  tags: string[];
  cover_image: string;
  publish_date: string;
  client_name: string;
  client_image: string;
  client_feedback: string;
  video_link: string;
  video_type?: "youtube" | "local"; // Add this field to distinguish video types
  project_images: string[];
  category: string[];
  duration?: string;
  software_used?: string[];
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

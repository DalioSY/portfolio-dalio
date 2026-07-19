export type ProjectType = {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
  topics: string[];
  homepage: string | null;
  created_at: string;
  updated_at: string;
  description: string | null;
  language: string | null;
  default_branch: string;
};
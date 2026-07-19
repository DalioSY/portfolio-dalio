import { ProjectType } from '@/types/ProjectType';
import axios from 'axios';

const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const userName = process.env.NEXT_PUBLIC_GITHUB_USER_NAME;

export interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export const getGitHubApi = async (): Promise<GitHubUser> => {
  const { data } = await axios.get<GitHubUser>(
    `https://api.github.com/users/${userName}`,
    {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }
  );

  return data;
};

export const getGitHubProjects = async (): Promise<ProjectType[]> => {
  const { data } = await axios.get<ProjectType[]>(
    `https://api.github.com/users/${userName}/repos`,
    {
      headers: {
        Authorization: `token ${githubToken}`,
      },
      params: {
        page: 1,
        per_page: 200,
        sort: "updated",
      },
    }
  );

  const api = await getGitHubApi();
  console.log("api", api);

  return data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    stargazers_count: repo.stargazers_count,
    html_url: repo.html_url,
    topics: repo.topics,
    homepage: repo.homepage,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    description: repo.description,
    language: repo.language,
    default_branch: repo.default_branch,
  }));
};
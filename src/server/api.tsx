import axios from 'axios';

export const getGitHubProjects = async () => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const userName = process.env.NEXT_PUBLIC_GITHUB_USER_NAME;
  
  try {
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos`,
      {
        headers: {
          Authorization: `token ${githubToken}`,
        },
        params: {
          page: 1,
          per_page: 200,
          sort: 'updated',
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("❌ error", err);
    throw err;
  }
};

import axios from 'axios';

export const getGitHubProjects = async () => {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  try {
    const response = await axios.get(
      'https://api.github.com/users/DalioSY/repos',
      {
        headers: {
          Authorization: `token ${token}`,
        },
        params: {
          page: 1,
          per_page: 200,
          sort: 'updated',
        },
      }
    );
    console.log(response);

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

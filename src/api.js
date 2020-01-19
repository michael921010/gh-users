
export const fetchAllUsers = async (since = 0) => {
    const response = await fetch(`https://api.github.com/users?since=${since}`);
    return response.json();
}

export const fetchUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
}

export const fetchUsersPerPage = async () => {
    const response = await fetch('https://api.github.com/user/repos?page=2&per_page=100');
    return response.json();
}
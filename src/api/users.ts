export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const usersApi = {
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json() as Promise<User[]>;
  },
};

export default usersApi;

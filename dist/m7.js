const fetchUser = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Failed to fetch user data: ${data.message}`);
        }
        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching user data:", error.message);
        }
        throw error;
    }
};
const userData = await fetchUser();
if (userData) {
    console.log(userData.name);
}
export {};

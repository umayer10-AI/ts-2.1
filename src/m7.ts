interface User {
    name: string;
    role: string;
}

interface ApiResponse <T> {
    data: T;
    success: boolean;
    statusCode: number;
    message: string;
}

const fetchUser = async (): Promise<User> => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = (await res.json()) as ApiResponse<User>;

        if(!res.ok || !data.success) {
            throw new Error(`Failed to fetch user data: ${data.message}`);
        }

        return data.data;
    } 
    catch(error) {
        if (error instanceof Error) {
            console.error("Error fetching user data:", error.message);
        }
        throw error;
    }
}

const userData = await fetchUser();

if(userData) {
    console.log(userData.name);
}

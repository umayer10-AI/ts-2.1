const wrapInArray = <T> (value: T) => {
    return [value];
}

const stringArr = wrapInArray<string>("ABC");
const numberArr = wrapInArray<number>(123);

stringArr.map((num) => num.toUpperCase()); 

interface User {
    name: string;
    role: string;
}

interface Blog {
    title: string;
    description: string;
    date: string;
}

interface ApiResponse <T> {
    data: T;
    success: boolean;
    statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

// const userRole: UserResponse = {
//     data: {
//         name: "John Doe",
//         role: "Admin"
//     },
//     success: true,
//     statusCode: 200
// };

const userRole: ApiResponse<User> = {
    data: {
        name: "John Doe",
        role: "Admin"
    },
    success: true,
    statusCode: 200
};
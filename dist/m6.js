const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("ABC");
const numberArr = wrapInArray(123);
stringArr.map((num) => num.toUpperCase());
// const userRole: UserResponse = {
//     data: {
//         name: "John Doe",
//         role: "Admin"
//     },
//     success: true,
//     statusCode: 200
// };
const userRole = {
    data: {
        name: "John Doe",
        role: "Admin"
    },
    success: true,
    statusCode: 200
};
export {};

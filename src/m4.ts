let a : any = "hello";
a = 10;
a.length

const b : unknown = "hello";
// b.length

let b2: unknown;
const num: number = 10;
b2 = num


interface User {
    name: string;
}
type loggedInUser = User | null;
const currentUser: loggedInUser = null;
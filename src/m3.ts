type p = "pending"
const s : p = "pending"
console.log(s)

type a = string | number
const b : a = "hello"
console.log(b)

type role = "user" | "admin" | "manager"
const userRole : role = "admin"
console.log(userRole)


type admin = {id: number, role: string, privileges: string[]}
type member = {id: number, role: string, plans: string[]}

type user = admin | member

const my : user = {id: 1, role: "member", plans: ["plan1", "plan2"]}
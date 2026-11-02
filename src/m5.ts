type Status = "pending" | "in-progress" | "completed";
const someStatus: string = "pending";
const showStatus = (status: Status) => {
    console.log(`The status is: ${status}`);
}
showStatus(someStatus as Status);


interface Config {
    port?: number;
}
const config: Config = { 
    port: 5000 
};
const currentPort: number = config.port!;
const currentPort2: number = config.port as number;


const configuration = {
    port: 8080,
    prefix: "/api/m4",
} as const;
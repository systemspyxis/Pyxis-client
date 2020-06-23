export interface User {
    id: string;
    username: string;
    password: string;
    locked: boolean;
    attempts:number;
    firstName:string;
    lastName:string;
    displayName:string;
    disabled:boolean;
    description:string;
    lastLogin:string;
    created:string;
    admin:boolean;
}
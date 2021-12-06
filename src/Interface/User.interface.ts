export interface Iuser {
    name: string;
    email : string;
    password: string;
}

export interface Iid{
    name:string;
}

export interface Imessage {
    success:boolean;
    message:string;
    accessToken: string | null

}
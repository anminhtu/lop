export class Login {

    constructor(
        public userName: string,
        public passWord: string) {
    }
}


export class TokenResponse {

    constructor(
        public access_token: string,
        public passWord: string) {
    }
}
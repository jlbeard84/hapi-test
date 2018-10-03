import * as dotenv from "dotenv";

export class Config {

    private readonly DEFAULT_PORT: number = 8000;

    public SecretKey: string;
    public AuthAlgorithm: string;
    public TokenExpirationTime: string;
    public Port: number;
    public DBServer: string;
    public DBName: string;
    public DBUsername: string;
    public DBPassword: string;

    constructor() {
        if (process.env.NODE_ENV !== "production") {
            const path = `${__dirname}/../../.env`;
            dotenv.config( {path: path });
        }

        this.SecretKey = process.env.SECRET_KEY;
        this.AuthAlgorithm = process.env.AUTH_ALGORITHM;
        this.TokenExpirationTime = process.env.TOKEN_EXPIRATION_TIME;
        this.DBServer = process.env.DB_SERVER;
        this.DBName = process.env.DB_DATABASE;
        this.DBUsername = process.env.DB_USERNAME;
        this.DBPassword = process.env.DB_PASSWORD;

        if (process.env.PORT && !isNaN(Number(process.env.port))) {
            this.Port = Number(process.env.port);
        } else {
            this.Port = this.DEFAULT_PORT;
        }
    }
}
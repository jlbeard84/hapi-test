import * as Sequelize from "sequelize";
import { Config } from "../config";

export class RepositoryFactory {

    private repository: Sequelize.Sequelize;
    private config: Config;

    constructor() {
        this.config = new Config();
    }

    public getRepository(): Sequelize.Sequelize {

        if (!this.repository) {
            this.repository = new Sequelize(
                this.config.DBName,
                this.config.DBUsername,
                this.config.DBPassword,
                {
                    host: this.config.DBServer,
                    dialect: "postgres",
                    // TODO: make this configurable
                    pool: {
                        max: 5,
                        min: 0,
                        acquire: 30000,
                        idle: 10000
                    }
                }
            );
        }

        return this.repository;
    }
}
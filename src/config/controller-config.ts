import { RepositoryFactory } from "../factories";

export class ControllerConfig {
    public readonly repositoryFactory: RepositoryFactory;

    constructor() {
        this.repositoryFactory = new RepositoryFactory();
    }
}

export class HelloModel {
    public message: string;
    public models: HelloModel[] = [];

    constructor(
        message: string = null) {

        if (message === null) {
            this.message = "Hello World"
        } else {
            this.message = message;
        }
    }
}
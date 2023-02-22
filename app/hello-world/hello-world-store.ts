import { Store } from "@ferrugemjs/v3rtigo";

class HelloWorldStore extends Store<string[]>{
    constructor() {
        super();
        this.state = ['hi'];

    }
    public addMsg(msg: string) {
        this.setState([
            ...this.getState(),
            msg,
        ]);

    }
}


// class HelloWorldStore {

// }

export default new HelloWorldStore();
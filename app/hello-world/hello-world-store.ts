import {Store} from 'v3rtigo';

class HelloWorldStore extends Store<string[]>{
    constructor(){
        super();
        this.state = ['hi'];
    }
    public addMsg(msg:string){
        this.setState([...this.getState(), msg]);
    }
}

export default new HelloWorldStore();
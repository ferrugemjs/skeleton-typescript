import {Store} from 'v3rtigo';

class HelloWorldStore extends Store<string[]>{
    constructor(){
        super();
        this.state = ['hi'];
    }
    public addMsg(msg:string){
        this.setState([...[String(msg),'sssss']]);
    }
}

export default new HelloWorldStore();
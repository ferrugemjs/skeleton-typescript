import helloWorldStore from './hello-world-store';
export class HelloWorld{
	private name:string;
	constructor(){
		this.name = 'test';
	}

	private get msgs(){
		return helloWorldStore.getState();
	}

	attached(){
		setInterval(() => {
			helloWorldStore.addMsg( `new msg:${new Date().getTime()}`);
		},1000)
	}
}



const HelloWorld = (params: any) => {
	console.log('params:', params)
	// this.msgs = helloWorldStore.getState();
	// this.name = 'sss';
	// this.increment = () => {
	// 	this.name = `new name ${new Date().getTime()}`;
	// }
}

const increment = () => {
	console.log('oia eu aqui!!!');
}

export { HelloWorld };

// export default HelloWorld;

// export class HelloWorld {
// 	private name: string;

// 	constructor() {
// 		this.name = 'test';
// 	}

// 	public get msgs() {
// 		return helloWorldStore.getState();
// 		// return [] as string[];
// 	}

// 	public increment() {
// 		this.name = `new name ${new Date().getTime()}`;
// 	}

// 	private attached() {
// 		// const sub = helloWorldStore.subscribe('state:changed', () => {
// 		// 	this.name = String('ss' + this.msgs.length);
// 		// })
// 		setInterval(() => {
// 			helloWorldStore.addMsg(`new msg:${new Date().getTime()}`);
// 		}, 1000)
// 	}
// }

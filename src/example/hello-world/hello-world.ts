export class HelloWorld{
  private name:string;	
  constructor(){
    this.name = "guess";
  }
  //by convention as the "name" attribute is modified the method to "set" + "attribute name" is called.
  setName(new_name:string):void{
    console.log(`${this.name} --> ${new_name}`);
    this.name = new_name;
  }
  private updateName():void{
    this.name = "my new name is test!";
    (<any>this).refresh();
  }
  attached():void{
    console.log("the element is attached!");
  }
}

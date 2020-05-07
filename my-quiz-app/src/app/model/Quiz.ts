import {Question} from 'src/app/model/Question';
export class Quiz{
    constructor(public id:number,public text:string,public questions:Array<Question>){}
}
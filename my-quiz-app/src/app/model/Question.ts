import {Choice} from 'src/app/model/Choice';
export interface Question{
    id: number;
    text: string;
    choices: Array<Choice>;
    correctAnswer:number;
    userAnswer:number;
}
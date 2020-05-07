import { Component, OnInit } from '@angular/core';
import {QuizService} from 'src/app/services/quiz.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewquiz',
  templateUrl: './viewquiz.component.html',
  styleUrls: ['./viewquiz.component.css']
})
export class ViewquizComponent implements OnInit {
quizzes:Array<any>=[]
  constructor(private quizService:QuizService,private router:Router) { }

  ngOnInit(): void {
    this.quizService.fetchAllQuizzes()
    .subscribe((res:any)=> {
      console.log(res);
      this.quizzes = res;
    })
  }
  takequiz(quiz: any){
    console.log('take quiz' , quiz);
    this.router.navigate(['take', quiz])
  }
}

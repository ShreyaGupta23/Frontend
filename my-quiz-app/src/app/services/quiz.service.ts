import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8000/api/quiz/';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  fetchAllQuizzes(){
return this.http.get(baseUrl);
  }
  fetchQuizByName(name:string){
    return this.http.get(baseUrl+name);
  }
}

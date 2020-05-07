import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  count:string;
  totalQuestion:string;
  cnt:number;
  tq:number;
  constructor(private route:ActivatedRoute) {}
   

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.count=params.get("count");
      this.totalQuestion=params.get("totalQuestion");
      this.cnt=+this.count;
      this.tq=+this.totalQuestion;
      console.log(this.count);
      console.log(this.totalQuestion);
      
    })
  }

}

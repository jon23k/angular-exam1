import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit, OnDestroy {
  message = "Your random value is ERROR";
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    document.getElementById('random-btn').classList.add("active");
    this.route.params.subscribe((routeParams: Params) => {
      const floor = routeParams["floor"];
      const answer = Math.floor(Math.random() * floor);
      if(floor == 2){
        if(answer != 0){
          this.message = "true";
        }
        else{
          this.message = "false";
        }
      }
      else{

        this.message = `Your random value is ${answer}`;
      }
      
    });
    
  }

  ngOnDestroy() {
    document.getElementById('random-btn').classList.remove("active");
  }
}

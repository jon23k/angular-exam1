import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
interface Abbreviation{
  abbreviation: string;
  fullname: string;
  $key?: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

formAbbreviation: Abbreviation ={
    'abbreviation': '',
    'fullname': '',
  };
  abbreviationStream: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase){
    this.abbreviationStream = db.list('/abbreviations');
  }

  ngOnInit() {
  }
  onSubmit(): void {
    try{
      if(this.formAbbreviation.$key){
        this.abbreviationStream.update(this.formAbbreviation.$key, this.formAbbreviation);
      }
      else{
    this.abbreviationStream.push(this.formAbbreviation);
      }
    this.formAbbreviation = {
    'abbreviation': '',
    'fullname': '',
    };

  } catch (e){
    console.log("Form Error: ", e);
  }

}

remove(abbreviationKey: string): void{
  this.abbreviationStream.remove(abbreviationKey);
}

}
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  slides = [{'image': 'https://source.unsplash.com/300x300/?west-australia'}, 
  {'image': 'https://source.unsplash.com/300x300/?perths/demo.png'}, 
  {'image': 'https://source.unsplash.com/300x300/?margaretriver,australi'}]

  
  ngOnInit() {
    this.slides 
  }
}





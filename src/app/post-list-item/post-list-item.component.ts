import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  
  @Input() title: string
  @Input() content: string
  @Input() created_at: Date

  loveIts : number = 0
  
  constructor() { }

  ngOnInit() {
  }


  incrementerLove(){
    this.loveIts++
    console.log(this.loveIts)
  }
  decrementerLove(){
    this.loveIts--
    console.log(this.loveIts)
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @ViewChild('p-sidebar') sidenav!: SidebarComponent; 
  constructor() { }

  ngOnInit(): void {
  }

}

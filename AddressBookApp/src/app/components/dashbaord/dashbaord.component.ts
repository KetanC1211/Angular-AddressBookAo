import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  btnClick=  () => {
    this.router.navigateByUrl('/form');
  };
  
}


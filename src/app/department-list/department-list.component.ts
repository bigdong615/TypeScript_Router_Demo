import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments =[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Mongo"},
    {"id":3, "name":"Ruby"},
    {"id":4, "name":"Java"}
  ]

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSelect(department: { id: any; }){
    //this.router.navigate(['/departments',department.id]);
    //relative path
    this.router.navigate([department.id],{relativeTo:this.route})

  }
}

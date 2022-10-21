import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;
  //router: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.departmentId = id;


  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments',{id:selectedId}])
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });

  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });

  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });


  }

}

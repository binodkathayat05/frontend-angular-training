import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:any=[];

  constructor(private _catogory:CategoryService) { }

  ngOnInit(): void {
    this._catogory.categories().subscribe((data:any)=>{
      //css
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !!","error in loading data",'error')
    }
    );
  }

}

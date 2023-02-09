import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions:any;
  constructor(private _route: ActivatedRoute,private _question:QuestionService,
    private _snak:MatSnackBar) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data)=>{
      console.log(data);
      this.questions=data;
    },(error)=>{
      Swal.fire('error','No data in the server','error');
    })
  }

  // delete questioin
  deleteQuestion(qid:any){
    console.log(qid);
    
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText: 'Delete',
      title: 'Are you sure want to delete this question ?',
    }).then((result)=> {
      if(result.isConfirmed){
        //confirm
        this._question.delteQuestion(qid).subscribe((data:any)=>{
this._snak.open('Question is deleted','',{
  duration:3000,
});
this.questions=this.questions.filter((q:any)=>q.quesId!=qid);
        },
        (error)=>{
          this._snak.open('error in deleting questions','',{
            duration:3000,
          });
          console.log(error);
          
        }
        )
      }
    })
  }
}

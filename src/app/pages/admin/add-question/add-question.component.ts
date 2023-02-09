import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor:any = ClassicEditor;
  constructor(private _route:ActivatedRoute,private _question:QuestionService) { }
  qId:any;
  qTitle:any;
  question:any={
    quiz:{
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }
  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this.question.quiz['qid']=this.qId;
    this.question.content='';
    this.question.option2='';
    this.question.option3='';
    this.question.option4='';
    this.question.answer='';
  }
  formSubmit(){
    if(this.question.content.trim()==''||this.question.content==null){
      return;
    }
    if(this.question.option1.trim()==''||this.question.option1==null){
      return;
    }
    if(this.question.option2.trim()==''||this.question.option2==null){
      return;
    }
    if(this.question.answer.trim()==''||this.question.answer==null){
      return;
    }
    console.log(this.question);
    
    
    //form submit
    this._question.addQuestion(this.question).subscribe((data)=>{
      Swal.fire('Success','add another question','success')
    },(error)=>{
      Swal.fire('error','error in server','error');
    });
  }

}

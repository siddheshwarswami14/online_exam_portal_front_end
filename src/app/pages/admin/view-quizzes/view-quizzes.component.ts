import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[

    {
      qId:23,
      title:'',
      description:
      '',
      maxMarks:'',
      numberOfQuestion: '',
      active: '',
      category:{
        title:''
      }

    },



  ];

  constructor(private _quize:QuizService) { }

  ngOnInit(): void {
    this._quize.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!','Error in loading data !','error');
      }
    );
  }

  //delte quiz function 
  deleteQuiz(qId:any)
  {

    Swal.fire //sweet alert 
    ({ 

      //properties
      icon: 'info', 
      title:"Are you sure ?",
      confirmButtonText:'Delete',
      showCancelButton: true,
    }).then((result)=>  //.then callback function
    {
      if(result.isConfirmed){
        //
        this._quize.deleteQuiz(qId).subscribe((data) =>{

          this.quizzes = this.quizzes.filter((quiz)=>quiz.qId != qId);
    
          Swal.fire('Sucess', 'Quiz deleted','success');
        },(error)=>{
    
          Swal.fire('Error', 'Error in deleting quiz','error');
    
        }
          
        );
      }
    });


    
  }

}

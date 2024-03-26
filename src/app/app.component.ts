import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];
  ForbiddenProjectNames = ['Test', 'Kifla']

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project-title': new FormControl(
        null, 
        [Validators.required], 
        [CustomValidators.asyncValidateProjectTitle]
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'project-status': new FormControl('Stable')
    })
  }

  onSubmit(){
    console.log(this.projectForm.controls)
    this.projectForm.reset();
  }

}

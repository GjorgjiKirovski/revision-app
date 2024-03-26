import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      'project-title': new FormControl(null, [Validators.required], [this.validateProjectTitleAsync.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'project-status': new FormControl('Stable')
    })
  }

  onSubmit(){
    console.log(this.projectForm.controls)
    this.projectForm.reset();
  }

  validateProjectTitleAsync(projectName: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(this.ForbiddenProjectNames.some(name => name === projectName.value)){
          resolve({'ForbiddenProjectName':true})
        } else {
          resolve(null);
        }
      }, 2000);
    })
    return promise
  }

  validateProjectTitle(projectName: FormControl): {[s:string]:boolean}{
    if(this.ForbiddenProjectNames.some(name => name === projectName.value)){
      return {'ForbiddenProjectName':true}
    }
    return null;
  }

}

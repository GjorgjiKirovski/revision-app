import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
        
    static validateProjectTitle(projectName: FormControl): {[s:string]:boolean}{
        if(projectName.value === 'Test'){
            return {'ForbiddenProjectName':true}
        }
        return null;
    }

    static asyncValidateProjectTitle(projectName: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if(projectName.value === 'Test'){
                    resolve({'ForbiddenProjectName':true})
                } else {
                    resolve(null);
                }
            }, 2000);
        })
        return promise
    }

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, type:string = 'ascending' ): any {
    console.log(value);
    return value.sort((a,b)=>{
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return type === 'ascending' ? -1 : 1;
      }
      if (nameA > nameB) {
        return type === 'ascending' ? 1 : -1;
      }
      // names must be equal
      return 0;
    });
  }

}

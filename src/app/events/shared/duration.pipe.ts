import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    var obj = {
      1:'Half Hour',
      2:'Full Hour',
      3:'Half Day',
      4:'Full Day'
    }
    return obj[value]? obj[value]:value.toString()  
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    // se tiver 8 digitos: 9999-9999
    if (value && value.length === 8) {
      return `${value.substr(0, 4)}-${value.substr(4, 4)}`;
    } else if (value && value.length === 10) {
      // (dd) 9999-8888
      return `(${value.substr(0, 2)}) ${value.substr(2, 4)}-${value.substr(6, 4)}`;
    } else if (value && value.length === 11) {
      // (ddd) 9999-8888
      return `(${value.substr(0, 3)}) ${value.substr(3, 4)}-${value.substr(7, 4)}`;
    } 
    return value;
  }

}

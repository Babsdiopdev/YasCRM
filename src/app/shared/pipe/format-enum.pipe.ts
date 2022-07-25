import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatEnum'
})
export class FormatEnumPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result = "";
    if("EN_COURS" === value) {
      result = 'En cours';
    }
    if("VALIDE" === value) {
      result = 'Validée';
    }
    if("ANNULE" === value) {
      result = 'Annulée';
    }
    return result;
  }

}

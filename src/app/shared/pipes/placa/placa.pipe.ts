import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placa',
})
export class PlacaPipe implements PipeTransform {
  transform(value: string): string {
    const result = value.substr(0, 3) + '-' + value.substr(3);
    return result.toUpperCase();
  }
}

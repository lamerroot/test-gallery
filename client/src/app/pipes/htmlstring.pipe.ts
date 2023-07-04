import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'htmlstring'
})
export class HtmlStringPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\r?\n/g, '<br>');
  }
}
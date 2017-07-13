import { Pipe, PipeTransform } from '@angular/core';
import * as metric_suffix from 'metric-suffix';

/**
 * Generated class for the MetricSuffixPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'MetricSuffix',
})
export class MetricSuffixPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    return metric_suffix(value, args[0]);
  }
}

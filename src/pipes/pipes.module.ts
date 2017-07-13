import { NgModule } from '@angular/core';
import { MetricSuffixPipe } from './metric-suffix/metric-suffix';

@NgModule({
  declarations: [
      MetricSuffixPipe
  ],
  exports:[MetricSuffixPipe]
})
export class PipesModule {}

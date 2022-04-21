import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-accelerator-details',
  templateUrl: './accelerator-details.component.html',
  styleUrls: ['./accelerator-details.component.css']
})
export class AcceleratorDetailsComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    isExpanded=false

  constructor(private breakpointObserver: BreakpointObserver) {}

}

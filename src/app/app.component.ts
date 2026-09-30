import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturedResourceComponent } from './featured-resource/featured-resource.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturedResourceComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
}

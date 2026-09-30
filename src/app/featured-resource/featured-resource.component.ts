import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-resource',
  templateUrl: './featured-resource.component.html',
  styleUrl: './featured-resource.component.css',
})
export class FeaturedResourceComponent {
  private readonly resources = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
  ];

  index = 0;

  get current() {
    return this.resources[this.index];
  }

  next() {
    this.index += 1;
    if (this.index > this.resources.length) {
      this.index = 0;
    }
  }
}

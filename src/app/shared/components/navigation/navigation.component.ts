import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  
  @Input('pageName') pageName!: string;
  @Input('showButton') showButton!: string;
  @Input('parentRoute') parentRoute!: string
  @Input('actionIcon') actionIcon!: string;
  @Input('actionRoute') actionRoute!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  back(): void {
    this.router.navigateByUrl(this.parentRoute)
  }

  onNavAction(action: string) {
    this.router.navigate([action], { relativeTo: this.route });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((params) => {
      console.log(params);
      if (params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  searchAction(term: string) {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    } else {
      this.router.navigateByUrl('/search/');
    }
  }
}

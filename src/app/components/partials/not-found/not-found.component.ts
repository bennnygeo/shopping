import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  @Input() visible = false;
  @Input() notFoundMsg = "Nothing Found!";
  @Input() resetLinkText = "Reset";
  @Input() resetLinkRoute = "/";

}

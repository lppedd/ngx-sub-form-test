import {Component, Input} from '@angular/core';
import {Page} from "../../models/family";
import {FormControl} from "@angular/forms";
import {Controls, NgxSubFormComponent} from "ngx-sub-form";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent extends NgxSubFormComponent<{ wrapper: Page }> {
  @Input()
  public set page(page: Page) {
    this.formGroup.setValue({
      wrapper: page
    })
  }

  protected formControls: Controls<{ wrapper: Page }> = {
    wrapper: new FormControl()
  };
}

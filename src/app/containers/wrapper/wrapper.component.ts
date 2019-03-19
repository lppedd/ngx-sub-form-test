import {Component} from '@angular/core';
import {Controls, NgxSubFormComponent, subformComponentProviders} from "ngx-sub-form";
import {Page} from "../../models/family";
import {FormArray} from "@angular/forms";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  providers: subformComponentProviders(WrapperComponent),
})
export class WrapperComponent extends NgxSubFormComponent<Page> {
  protected formControls: Controls<Page> = {
    families: new FormArray([])
  };

  public get families(): FormArray {
    return this.formGroup.get(this.formControlNames.families) as FormArray
  }
}

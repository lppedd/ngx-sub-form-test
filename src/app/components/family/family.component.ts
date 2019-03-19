import {Component} from '@angular/core';
import {Controls, NgxSubFormComponent, subformComponentProviders} from "ngx-sub-form";
import {Family} from "../../models/family";
import {FormArray, FormControl} from "@angular/forms";

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
  providers: subformComponentProviders(FamilyComponent),
})
export class FamilyComponent extends NgxSubFormComponent<Family> {
  protected formControls: Controls<Family> = {
    name: new FormControl(),
    values: new FormArray([])
  };
}

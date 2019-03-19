import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, Validators} from '@angular/forms';
import {Controls, NgxSubFormRemapComponent, subformComponentProviders} from 'ngx-sub-form';
import {VehicleType} from 'src/app/interfaces/vehicle.interface';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.scss'],
  providers: subformComponentProviders(SpaceshipComponent),
})
export class SpaceshipComponent extends NgxSubFormRemapComponent<any, any> implements OnInit {
  protected formControls: Controls<any>;

  public get color(): FormArray {
    return this.formGroup.get(this.formControlNames.color) as FormArray;
  }

  ngOnInit(): void {
    this.formControls = {
      color: new FormArray([]),
      canFire: new FormControl(false, {validators: [Validators.required]}),
      numberOfPeopleOnBoard: new FormControl(null, {validators: [Validators.required]}),
      numberOfWings: new FormControl(null, {validators: [Validators.required]}),
      vehicleType: new FormControl(VehicleType.SPACESHIP, {validators: [Validators.required]}),
    };
  }

  public test(): void {
    this.formControls = {
      test: new FormControl(null),
      ...this.formControls
    };

    console.log(this.formControls);
  }

  protected transformToFormGroup(obj: any) {
    throw new Error("Method not implemented.");
  }

  protected transformFromFormGroup(formValue: any) {
    throw new Error("Method not implemented.");
  }
}

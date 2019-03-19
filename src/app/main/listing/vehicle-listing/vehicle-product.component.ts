import { Component } from '@angular/core';
import {FormArray, FormControl, Validators} from '@angular/forms';
import { Controls, NgxSubFormRemapComponent, subformComponentProviders } from 'ngx-sub-form';
import { OneVehicle, Spaceship, Speeder, VehicleType } from 'src/app/interfaces/vehicle.interface';

interface OneVehicleForm {
  speeder: Speeder;
  spaceship: Spaceship;
  vehicleType: VehicleType;
}

@Component({
  selector: 'app-vehicle-product',
  templateUrl: './vehicle-product.component.html',
  styleUrls: ['./vehicle-product.component.scss'],
  providers: subformComponentProviders(VehicleProductComponent),
})
export class VehicleProductComponent extends NgxSubFormRemapComponent<OneVehicle, OneVehicleForm> {
  protected formControls: Controls<OneVehicleForm> = {
    speeder: new FormControl(null),
    spaceship: new FormControl(null),
    vehicleType: new FormControl(null, { validators: [Validators.required] }),
  };

  public VehicleType = VehicleType;

  protected transformToFormGroup(obj: OneVehicle): OneVehicleForm {
    return {
      speeder: obj.vehicleType === VehicleType.SPEEDER ? obj : null,
      spaceship: obj.vehicleType === VehicleType.SPACESHIP ? obj : null,
      vehicleType: obj.vehicleType,
    };
  }

  protected transformFromFormGroup(formValue: OneVehicleForm): OneVehicle {
    switch (formValue.vehicleType) {
      case VehicleType.SPEEDER:
        return formValue.speeder;
      case VehicleType.SPACESHIP:
        return formValue.spaceship;
    }
  }
}

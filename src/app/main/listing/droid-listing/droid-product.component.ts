import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Controls, NgxSubFormRemapComponent, subformComponentProviders } from 'ngx-sub-form';
import {
  AssassinDroid,
  AstromechDroid,
  DroidType,
  MedicalDroid,
  OneDroid,
  ProtocolDroid,
} from 'src/app/interfaces/droid.interface';

interface OneDroidForm {
  protocolDroid: ProtocolDroid;
  medicalDroid: MedicalDroid;
  astromechDroid: AstromechDroid;
  assassinDroid: AssassinDroid;
  droidType: DroidType;
}

@Component({
  selector: 'app-droid-product',
  templateUrl: './droid-product.component.html',
  styleUrls: ['./droid-product.component.scss'],
  providers: subformComponentProviders(DroidProductComponent),
})
export class DroidProductComponent extends NgxSubFormRemapComponent<OneDroid, OneDroidForm> {
  protected formControls: Controls<OneDroidForm> = {
    protocolDroid: new FormControl(null),
    medicalDroid: new FormControl(null),
    astromechDroid: new FormControl(null),
    assassinDroid: new FormControl(null),
    droidType: new FormControl(null, { validators: [Validators.required] }),
  };

  public DroidType = DroidType;

  protected transformToFormGroup(obj: OneDroid): OneDroidForm {
    return {
      protocolDroid: obj.droidType === DroidType.PROTOCOL ? obj : null,
      medicalDroid: obj.droidType === DroidType.MEDICAL ? obj : null,
      astromechDroid: obj.droidType === DroidType.ASTROMECH ? obj : null,
      assassinDroid: obj.droidType === DroidType.ASSASSIN ? obj : null,
      droidType: obj.droidType,
    };
  }

  protected transformFromFormGroup(formValue: OneDroidForm): OneDroid {
    switch (formValue.droidType) {
      case DroidType.PROTOCOL:
        return formValue.protocolDroid;
      case DroidType.MEDICAL:
        return formValue.medicalDroid;
      case DroidType.ASTROMECH:
        return formValue.astromechDroid;
      case DroidType.ASSASSIN:
        return formValue.assassinDroid;
    }
  }
}

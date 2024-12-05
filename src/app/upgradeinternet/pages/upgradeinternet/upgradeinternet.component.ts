import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upgradeinternet',
  templateUrl: './upgradeinternet.component.html',
  styleUrls: ['./upgradeinternet.component.css']
})
export class UpgradeinternetComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder){
      this.form = this.fb.group({
        
        userTacas: ['', [Validators.required]],
        password: ['', [Validators.required]],
        commitPE: ['', [Validators.required]],
        ACCESO: ['', [Validators.required]],
        CPE: ['', [Validators.required]],
        fields: this.fb.array([])
      })
    }

    get fields(): FormArray {
      return this.form.get('fields') as FormArray
    }

    addField():void {
      const fieldGroup = this.fb.group({
        cid:['', [Validators.required]],
        bandwidth: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
      })
      this.fields.push(fieldGroup)
    }

    removeField(index: number): void {
      this.fields.removeAt(index);
    }

    submitForm(): void {
      if (this.form.valid){
        const groupeData =  this.groupByBandwidth(this.form.value.fields);
        console.log('Datos agrupados:', groupeData)
      }else{
        console.error('Formulario no valido')
      }
    }

    private groupByBandwidth(fields: {cid: string, bandwidth: string }[]):Record<string, string[]>{
      return fields.reduce((acc,fields) => { 
        const {bandwidth, cid} = fields;
        if (!acc[bandwidth]){
            acc[bandwidth] = []
        }
        acc[bandwidth].push(cid);
        return acc;
      }, {} as Record<string, string[]>);
    }
}



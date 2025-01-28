import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
        const valor = <string>control.value;
        if(valor.length === 0){return null}
        const primerLetra = valor[0];
        if(primerLetra !== primerLetra.toUpperCase()){
            return {
                primeraLetraMayuscula:{
                    mensaje: 'La primera letra debe ser mayúscula'
                }
            }
        }else{
            return null;
        }
    }
}
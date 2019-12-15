import { of } from 'rxjs';

const obs$ = of<number>(...[1,2,3,4,5,6,13,45,63,21,9]);
console.log("Inicio del Obs$");
obs$.subscribe(
  next => console.log("next", next),
  null,
  () => console.log("Finally sec.")
)
console.log("Fin del Obs$");
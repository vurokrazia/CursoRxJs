import { of, range, asyncScheduler } from 'rxjs';

const src$ = range(1,100, asyncScheduler);
console.log("inicio");
src$.subscribe(
  console.log
);
console.log("Fin");
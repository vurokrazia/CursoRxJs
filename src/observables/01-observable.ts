import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log("[next]:", value),
  error: error => console.warn("[warn obs]", error),
  complete: () => { console.info("[Complete]") }
}
//const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
  subs.next('=============================');
  subs.next('Hola');
  subs.next('Mundo');
  subs.next('=============================');

  const a = undefined;
  a.nombre = "Jesus";

  subs.complete();

});

obs$.subscribe(observer);
/*
obs$.subscribe(
  valor => console.log("next:", valor),
  error => console.warn("error", error),
  () => console.info("Complete")
);
*/
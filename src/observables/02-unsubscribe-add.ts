import { Observable, Observer, onErrorResumeNext } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log("next", value),
  error: error => console.warn("warn", error),
  complete: () => { console.info("Complete") }
}

const intervalo$ = new Observable<number>(subscriber => {
  let cont = 0;
  setInterval(() => {
    subscriber.next(cont++);
  }, 1000);
})

const subs =  intervalo$.subscribe(num => console.log(num));


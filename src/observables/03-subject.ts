import { Observable, Observer, onErrorResumeNext } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log("next", value),
  error: error => console.warn("warn", error),
  complete: () => { console.info("Complete") }
}


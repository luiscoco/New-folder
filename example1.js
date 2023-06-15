import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

observable.subscribe({
  next: (value) => {
    console.log(value); // Print the value to the console
  },
  complete: () => {
    console.log('Observable complete'); // Print a completion message
  },
});

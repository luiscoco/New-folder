# RxJS_Sample1-Observables

https://rxjs.dev/guide/observable

Observables are lazy Push collections of multiple values. They fill the missing spot in the following table:
```
        SINGLE       MULTIPLE
Pull	Function     Iterator
Push	Promise	     Observable
```

Example. The following is an Observable that pushes the values 1, 2, 3 immediately (synchronously) when subscribed, and the value 4 after one second has passed since the subscribe call, then completes:
```javascript
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
```

To invoke the Observable and see these values, we need to subscribe to it:
```javascript
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

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');
```

Which executes as such on the console:

```
just before subscribe
got value 1
got value 2
got value 3
just after subscribe
got value 4
done
```

## How to install the packages and run the application

First install the RxJS package running this command:

```
npm install rxjs
```

To run the application:

```
node example1.js
```

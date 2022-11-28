import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function'

pipe(
  E.right("test"),
  E.fold(
    () => console.log("left - top level"),
    m => console.log("right - top level", m)
  )
);

export const apiFn = <E, A>(valA: E, valB: A) => {
  if(typeof valA === "number" && typeof valB === "number"){
    console.log("both numbers")
  } else {
    console.log("not both numbers")
  }
  pipe(
    E.right("test"),
    E.fold(
      () => console.log("left - in function"),
      m => console.log("right - in function", m)
    )
  );
}

apiFn(1, 2);
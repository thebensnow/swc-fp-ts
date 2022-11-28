import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function'

pipe(
  E.right("test"),
  E.fold(
    () => console.log("left - top level"),
    m => console.log("right - top level", m)
  )
);

export const apiFn = () => {
  pipe(
    E.right("test"),
    E.fold(
      () => console.log("left - in function"),
      m => console.log("right - in function", m)
    )
  );
}

apiFn();
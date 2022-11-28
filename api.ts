import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { Duration } from 'date-fns';
import * as TE from 'fp-ts/lib/TaskEither'

pipe(E.right("test"), E.fold(() => console.log("left"), () => console.log("right")));

export const useDataLoader = <E, A>(te: TE.TaskEither<E, A>, expiration: O.Option<Duration>, ts?: number) => {
  pipe(E.right("test"), E.fold(() => console.log("left"), () => console.log("right")));

  return [false, O.none as O.Option<E.Either<E, A>>] as const;
};
import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { Duration } from 'date-fns';
import * as TE from 'fp-ts/lib/TaskEither'
import * as Eq from 'fp-ts/lib/Eq'
import * as D from 'fp-ts/lib/Date'

export const dataEitherEq = O.getEq(E.getEq(Eq.eqStrict, Eq.eqStrict));
export const exEq = E.getEq(Eq.eqStrict, D.Eq);

pipe(E.right("test"), E.fold(() => console.log("left"), () => console.log("right")));

export const useDataLoader = <E, A>(te: TE.TaskEither<E, A>, expiration: O.Option<Duration>, ts?: number) => {
  pipe(E.right("test"), E.fold(() => console.log("left"), () => console.log("right")));

  return [false, O.none as O.Option<E.Either<E, A>>] as const;
};
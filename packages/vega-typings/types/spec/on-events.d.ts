import { Expr, ExprRef, EventSelector, SignalRef, SignalValue, Stream } from '.';

export type EventListener =
  | SignalRef
  | {
      scale: string;
    }
  | Stream;

export type Events = EventSelector | EventListener;
export type Update =
  | Expr
  | ExprRef
  | SignalRef
  | {
      value: SignalValue;
    };
export type OnEvent = (
  | {
      encode: string;
    }
  | {
      update: Update;
      rerank?: boolean;
    }) & {
  events: Events | EventListener[];
  force?: boolean;
};

import {
  useState as useReactState,
  useEffect as useReactEffect,
  FunctionComponent,
} from "react";

declare global {
  const useState: typeof useReactState;
  const useEffect: typeof useReactEffect;
  const Widget: FunctionComponent<{
    src: string;
    props?: Object;
    trust?: { mode: string };
    id?: string;
  }>;
}

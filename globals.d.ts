import { useState as useReactState, useEffect as useReactEffect } from "react";

declare global {
  const useState: typeof useReactState;
  const useEffect: typeof useReactEffect;
}

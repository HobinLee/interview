import { useEffect } from "react";

export default function(callBack: () => void) {
  useEffect(callBack, []);
}
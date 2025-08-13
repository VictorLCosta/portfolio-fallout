/* eslint-disable consistent-return */

import { useEffect, useState } from "react";

type Props = {
  cleanup: boolean;
  appendTo: string;
};

export function useScript(
  src: string,
  { cleanup = false, appendTo = "body" }: Props,
) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`,
    );
    let shouldAppend = false;

    if (!script) {
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      shouldAppend = true;
    } else if (script.hasAttribute("data-loaded")) {
      setLoaded(true);
    }

    const onScriptLoad = () => {
      script.setAttribute("data-loaded", "true");
      setLoaded(true);
    };

    const onScriptError = () => {
      if (cleanup) {
        script.remove();
      }
      setLoaded(false);
    };

    script.addEventListener("load", onScriptLoad);
    script.addEventListener("error", onScriptError);

    if (shouldAppend) {
      document[appendTo === "body" ? "body" : "head"].appendChild(script);
    }

    return () => {
      if (cleanup) {
        script.removeEventListener("load", onScriptLoad);
        script.removeEventListener("error", onScriptError);
        script.remove();
      }
    };
  }, [src, cleanup, appendTo]);

  return loaded;
}

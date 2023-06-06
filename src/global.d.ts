declare enum PlayerState {
  Completed = "completed",
  Destroyed = "destroyed",
  Error = "error",
  Frozen = "frozen",
  Loading = "loading",
  Paused = "paused",
  Playing = "playing",
  Stopped = "stopped",
}
declare enum PlayMode {
  Bounce = "bounce",
  Normal = "normal",
}
type PreserveAspectRatio =
  | "xMidYMid meet"
  | "xMidYMid slice"
  | "xMinYMin slice"
  | "none";

declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": {
      autoplay?: boolean | "" | "autoplay" | null;
      background?: string;
      controls?: boolean | "" | "controls" | null;
      count?: number;
      currentState?: PlayerState;
      description?: string;
      direction?: AnimationDirection;
      hover?: boolean | undefined;
      intermission?: number | undefined;
      loop?: boolean | "" | "loop" | null;
      mode?: PlayMode;
      objectfit?: "contain" | "cover" | "fill" | "scale-down" | "none";
      preserveAspectRatio?: PreserveAspectRatio;
      renderer?: "svg" | "canvas" | "html";
      segment?: [number, number] | string;
      seeker?: number;
      speed?: number;
      src: string;
      subframe?: boolean | "" | null;

      [key: string]: any;
    };
  }
}

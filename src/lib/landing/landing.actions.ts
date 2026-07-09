import type { LandingAction } from "./landing.types";

export function getActionHref(action: LandingAction) {
  if (action.type === "phone") {
    return `tel:${action.href.replace(/[^\d+]/g, "")}`;
  }

  return action.href;
}

export function getYoutubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.replace("/", "")}`;
    }

    const videoId = parsedUrl.searchParams.get("v");

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsedUrl.pathname.includes("/embed/")) {
      return url;
    }
  } catch {
    return "";
  }

  return "";
}

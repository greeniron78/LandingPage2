import { getYoutubeEmbedUrl } from "@/lib/landing/landing.actions";

type YoutubeEmbedProps = {
  url: string;
  title: string;
};

export function YoutubeEmbed({ url, title }: YoutubeEmbedProps) {
  const embedUrl = getYoutubeEmbedUrl(url);

  if (!embedUrl) {
    return null;
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-[#16251d] shadow-xl shadow-black/10">
      <iframe
        className="size-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

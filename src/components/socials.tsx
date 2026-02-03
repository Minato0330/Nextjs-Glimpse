import { siteConfig } from "@/lib/config/site.config";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Socials() {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon" variant="ghost">
        <a href={siteConfig.creator.url} target="_blank" rel="noopener noreferrer">
          <Icons.Github className="size-4" />
        </a>
      </Button>
    </div>
  )
}
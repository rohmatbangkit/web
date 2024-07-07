import { PostButton } from "./post-button";
import { ThumbGrid } from "./thumb-grid";
import { formatLongDate } from "@/lib/utils";
import type { PostResolved } from "@semicolon/api/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@semicolon/ui/avatar";
import { Separator } from "@semicolon/ui/separator";
import {
  Bookmark,
  Heart,
  MessageCircle,
  Repeat2,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";

export function PostDetail({
  name,
  avatar,
  username,
  createdAt,
  content,
  views,
  media,
  replyCount,
  likeCount,
  id,
}: PostResolved) {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="flex flex-row items-center gap-3">
        <Link href={`/${username}`} className="hover:underline">
          <Avatar className="size-11">
            {avatar && <AvatarImage width={300} height={300} src={avatar} />}
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div>
              <Link href={`/${username}`} className="hover:underline">
                <h4 className="text-md font-semibold">{name}</h4>
              </Link>
              <Link href={`/${username}`}>
                <p className="text-sm text-zinc-500">@{username}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p>{content}</p>
      {media.length > 0 && <ThumbGrid srcs={media} />}
      <div className="flex flex-row items-center gap-1">
        <div className="text-sm text-zinc-500">
          <Link href={`/post/${id}`} className="hover:underline">
            {formatLongDate(createdAt)}
          </Link>
          {" · "}
          <b className="text-foreground text-base font-extrabold">
            {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
              views,
            )}{" "}
          </b>
          views
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Separator />
        <div className="flex w-full min-w-0 items-center justify-between gap-2 lg:px-3">
          <PostButton
            icon={MessageCircle}
            iconSize="big"
            href={`/post/${id}`}
            label={replyCount}
          />
          <PostButton
            icon={Repeat2}
            iconSize="big"
            highlight="green"
            onClick={() => undefined}
            label={15}
          />
          <PostButton
            icon={Heart}
            iconSize="big"
            highlight="pink"
            onClick={() => undefined}
            label={likeCount}
          />
          <PostButton
            icon={Bookmark}
            iconSize="big"
            onClick={() => undefined}
            label={15}
          />
          <PostButton icon={Upload} onClick={() => undefined} />
        </div>
        <Separator />
      </div>
    </div>
  );
}
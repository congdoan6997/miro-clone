"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { BoardCardOverlay } from "./overlay";
import { Footer } from "./footer";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { Actions } from "@/components/actions";
type BoardCardProps = {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
};
export const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const { mutate: mutateFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite
  );
  const { mutate: mutateUnfavorite, pending: pendingUnfavorite } =
    useApiMutation(api.board.unfavorite);

  const toggleFavorite = () => {
    if (isFavorite) {
      mutateUnfavorite({
        id,
      }).catch(() => toast.error("Failed to unfavorite board."));
    } else {
      mutateFavorite({
        id,
        orgId,
      }).catch(() => toast.error("Failed to favorite board."));
    }
  };
  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} className="object-fix" fill />
          <BoardCardOverlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnfavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

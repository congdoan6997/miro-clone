"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import { EmptySearch } from "./empty-search";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  //   const data = useQuery(api.boards.get, {
  //     orgId,
  //     ...query,
  //   });
  return <EmptyBoards />;
};

"use client";
import { useMountedState } from "react-use";

import { RenameModal } from "@/components/rename-modal";

export const ModalProvider = () => {
  const isMounted = useMountedState();
  if (!isMounted) return null;
  return (
    <>
      <RenameModal />
    </>
  );
};

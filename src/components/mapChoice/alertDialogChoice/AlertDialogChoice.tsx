import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { ReactNode } from "react";

function AlertDialogChoiceUI({
  children,
  altLogo,
}: {
  children: ReactNode;
  altLogo: string;
}) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sujet sensible</AlertDialogTitle>
            <AlertDialogDescription>
              Ce module contient des thématiques portant sur les violences.
              Êtes-vous sûr de vouloir continuer ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <Link href={`/difficulty?theme=${encodeURIComponent(altLogo)}`}>
              <AlertDialogAction className="bg-[#0E956D]">
                Continuer
              </AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AlertDialogChoiceUI;

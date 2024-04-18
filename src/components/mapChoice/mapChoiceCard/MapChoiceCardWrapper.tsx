import { ReactNode } from "react";
import AlertDialogChoice from "../alertDialogChoice/AlertDialogChoice";
import Link from "next/link";

const MapChoiceCardWrapper = ({
  altLogo,
  showWarning,
  children,
}: {
  altLogo: string;
  showWarning?: boolean;
  children: ReactNode;
}) => {
  if (showWarning) {
    return <AlertDialogChoice altLogo={altLogo}>{children}</AlertDialogChoice>;
  } else {
    return (
      <Link href={`/difficulty?theme=${encodeURIComponent(altLogo)}`}>
        {children}
      </Link>
    );
  }
};

export default MapChoiceCardWrapper;

interface CTASecondaryButtonProps {
  title: string;
  onClick: () => void;
}

interface CTAPrimaryButtonProps {
  title: string;
  onClick: () => void;
  classNames?: string;
}

interface EmptyPaperPlaneCTAProps {
  title: string;
}

interface BackButtonProps {
  title: string;
  href: string;
}
interface AuthTogglerProps {
  role: "admin" | "agent";
  setRole: (value: "admin" | "agent") => void;
}

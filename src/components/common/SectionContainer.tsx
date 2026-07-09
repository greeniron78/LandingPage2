import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  ariaLabelledby?: string;
};

export function SectionContainer({
  children,
  className = "",
  innerClassName = "",
  ariaLabelledby,
}: SectionContainerProps) {
  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={`px-5 py-14 sm:px-8 lg:px-10 ${className}`}
    >
      <div className={`mx-auto w-full max-w-5xl ${innerClassName}`}>{children}</div>
    </section>
  );
}

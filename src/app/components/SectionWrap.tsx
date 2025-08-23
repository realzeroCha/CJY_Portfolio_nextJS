import { useObserveView } from "../hooks/useObserveView";

interface SectionWrapperProps {
  children: (inView: boolean) => React.ReactNode;
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  const { ref, isView } = useObserveView<HTMLDivElement>();
  return <div ref={ref}>{children(isView)}</div>;
}

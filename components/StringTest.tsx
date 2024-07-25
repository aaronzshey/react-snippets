import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
export default function StringTest({ children }: Props) {
  return (
    <div style={{ backgroundColor: "red", height: "auto", width: "auto" }}>
      <div>{children}</div>
    </div>
  );
}

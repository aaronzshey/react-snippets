import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function ChildrenTest(props: Props) {
  return (
    <div style={{ backgroundColor: "green", height: "auto", width: "auto" }}>
      <div>{props.children}</div>
    </div>
  );
}

import React from "react";

import scss from "./container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={scss.container}>{children}</div>;
}

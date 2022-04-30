import { FC } from "react";

interface IfProps{
  when: boolean;
}

const If: FC<IfProps> = ({ when, children }) => when ? <>{children}</> : null

export default If;
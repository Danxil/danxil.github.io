import { ReactNode } from "react";

export type ElementType = { node: ReactNode, id: string; className?: string; };
export type PositioningProps = { elements: ElementType[]; activeId: string };
export type ElementProps = ElementType & { active: boolean };
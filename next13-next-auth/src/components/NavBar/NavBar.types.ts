import { Session } from "next-auth"

export interface NavBarProps {
  tabsList: Tab[],
}

export type Tab = { name: string, href: string}
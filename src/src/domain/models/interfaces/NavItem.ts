export interface NavItem {
  readonly name: string;
  readonly href: string;
  readonly icon?: React.ComponentType;
  readonly requiresAuth?: boolean;
}

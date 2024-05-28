import React from 'react';
import type { CardProps } from './types';
declare const Card: {
    ({ children, ...restProps }: CardProps): JSX.Element;
    Actions: React.MemoExoticComponent<({ children, ...restProps }: import("@mui/material").CardActionsProps) => JSX.Element>;
    Content: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<import("./types").ContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>>;
    Header: React.MemoExoticComponent<(props: import("./types").HeaderProps) => JSX.Element>;
    Media: React.MemoExoticComponent<({ children, ...restProps }: import("./types").MediaProps) => JSX.Element>;
};
export default Card;
//# sourceMappingURL=Card.d.ts.map
/// <reference types="react" />
import type { AccordionProps } from './types';
declare const Accordion: {
    (props: AccordionProps): JSX.Element;
    Summary: import("react").MemoExoticComponent<({ iconPosition, title, subTitle, ...rest }: import("./types").SummaryProps) => JSX.Element>;
    Details: import("react").MemoExoticComponent<(props: import("@mui/material").AccordionDetailsProps) => JSX.Element>;
    Actions: import("react").MemoExoticComponent<(props: import("./types").ActionsProps) => JSX.Element>;
};
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map
import type { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import type { AccordionActionsProps } from '@mui/material/AccordionActions';
import type { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import type React from 'react';
export type AccordionProps = MuiAccordionProps;
export type SummaryProps = Omit<AccordionSummaryProps, 'children'> & {
    iconPosition?: 'start' | 'end';
    title: string;
    subTitle?: string;
};
export type DetailsProps = AccordionDetailsProps;
export type ActionsProps = Omit<AccordionActionsProps, 'children'> & {
    children: [React.ReactChild, React.ReactChild] | React.ReactChild;
};
//# sourceMappingURL=types.d.ts.map
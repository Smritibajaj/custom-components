import MuiAccordion from '@mui/material/Accordion';

import Actions from './Actions';
import Details from './Detail';
import Summary from './Summary';
import type { AccordionProps } from './types';

const Accordion = (props: AccordionProps) => (
	<MuiAccordion elevation={0} {...props} />
);

Accordion.Summary = Summary;
Accordion.Details = Details;
Accordion.Actions = Actions;

export default Accordion;

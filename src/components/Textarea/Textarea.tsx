import React, { forwardRef, memo } from 'react';

import { type TextFieldProps, TextField } from '../TextField';

const Textarea = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => (
	<TextField {...props} multiline maxRows={4} ref={ref} type="text" />
));

Textarea.displayName = 'Textarea';

export default memo(Textarea);

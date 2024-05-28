/// <reference types="react" />
import type { SnackbarProps as MuiSnackbarProps } from '@mui/material';
import type { IconName } from '../Icon';
export type SnackbarProps = Omit<MuiSnackbarProps, 'action' | 'message'> & {
    /**
     * The action to display. It renders after the message, at the end of the snackbar.
     */
    action?: [React.ReactChild, React.ReactChild] | React.ReactChild;
    /**
     * Message to render in snackbar
     * @default null
     */
    message: string;
    /**
     * Start Icon Name to render with message
     * @default null
     */
    startIconName?: IconName;
    /**
     * if true snackbar will be closed on clickaway
     * @default false
     */
    shouldCloseOnClickaway?: boolean;
    variant?: 'dark' | 'light';
};
//# sourceMappingURL=types.d.ts.map
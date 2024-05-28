/// <reference types="react" />
export type TNoteAttachmentSize = 'medium' | 'small';
export type TActionAttachmentSize = 'medium' | 'small';
export type TFileAttachmentSize = 'medium' | 'small' | 'large';
export type TActionPriority = 'high' | 'medium' | 'low';
export interface INoteAttachmentProps {
    /**
     * Description of note
     */
    description: string;
    /**
     * Size variant
     */
    size?: TNoteAttachmentSize;
    /**
     * Meta data to show
     * - createdAt
     * - createdBy
     */
    meta?: {
        createdAt?: {
            value: string;
        };
        createdBy?: {
            label?: string;
            img?: string | JSX.Element;
            name: string;
        };
    };
    /**
     * handler function to call on remove icon (X) click, if this prop passed then X icon will appear
     */
    onRemove?: (...args: any[]) => void;
}
export interface IActionAttachmentProps {
    /**
     * Action title
     */
    title: string;
    /**
     * Description of note
     */
    description: string;
    /**
     * Size variant
     */
    size?: TActionAttachmentSize;
    /**
     * priority of action
     */
    priority?: TActionPriority;
    /**
     * Meta data to show
     * - due date
     * - assigned by
     * - status
     */
    meta?: {
        dueDate?: {
            label?: string;
            value: string;
        };
        assignedBy?: {
            label?: string;
            img?: string | JSX.Element;
            name: string;
        };
        status?: {
            label?: string;
            value: string;
        };
    };
    /**
     * handler function to call on remove icon (X) click, if this prop passed then X icon will appear
     */
    onRemove?: (...args: any[]) => void;
}
export interface IFileAttachmentProps {
    /**
     * file name
     */
    filename: string;
    /**
     * Size variant
     */
    size?: TFileAttachmentSize;
    /**
     * thumbnail
     * */
    thumbnail?: string;
    /**
     * Meta data to show
     * - filesize
     * - username
     */
    meta?: {
        /**
         * file size
         */
        filesize?: string;
        /**
         * user name
         */
        username?: string;
    };
    /**
     * handler function to call on remove icon (X) click, if this prop passed then X icon will appear
     */
    onRemove?: (...args: any[]) => void;
}
//# sourceMappingURL=types.d.ts.map
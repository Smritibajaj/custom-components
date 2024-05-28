export type CodeEditorProps = {
	setCode: (_value: string) => void;
	code: string;
	height?: string;
	disabled?: boolean;
};

export type CodeEditorTextAreaProps = {
	height?: string;
	value?: string;
	disabled?: boolean;
	error?: boolean;
	label: string;
	required?: boolean;
	helperText?: string;
	onChange: (_value: string) => void;
	language?: string;
	showPrettify?: boolean;
	showFormatErrors?: boolean;
	editorUrl?: string;
};

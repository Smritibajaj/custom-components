import Editor, { type OnMount } from '@monaco-editor/react';
import { FormHelperText, useTheme } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { Button } from '../Button';
import { Typography } from '../Typography';
// import DataCenter from './DataCenter';
import {
	CodeEditorArea,
	EditorContainer,
	EditorHeader,
	ModalConatiner,
} from './styles';
import type { CodeEditorTextAreaProps } from './types';
import { transformData } from './utils';

function CodeEditor(props: CodeEditorTextAreaProps) {
	const {
		label,
		required,
		value,
		height = '300',
		disabled = false,
		error = false,
		helperText,
		language = 'json',
		showPrettify = true,
		showFormatErrors = true,
		onChange,
		name,
	} = props;

	console.log('value from code editor :: ', { value, name });

	const [jsonString, setJSONString] = useState(value || '');
	const [methodError, setMethodError] = useState('');
	const theme = useTheme();
	const editorRef = useRef<any>(null);
	const monacoRef = useRef<any>(null);
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
	const [showModal, setShowModal] = useState(false);

	const { dataCenter } =  {};

	useEffect(() => {
		setJSONString(value);
	}, [value]);

	const handleMouseWheel = e => {
		const editor = editorRef.current;

		if (editor) {
			// Check if we're at the top or bottom of the editor's scroll
			const isAtTop = editor.getScrollTop() === 0;

			// Check if the scroll position is at the bottom
			const isAtBottom =
				editor.getScrollTop() + height >= editor.getScrollHeight();

			if (isAtTop && e.deltaY < 0) {
				// At the top and scrolling up, activate parent window's scroll
				editor.updateOptions({
					scrollbar: {
						handleMouseWheel: false,
					},
				});
			} else if (isAtBottom && e.deltaY > 0) {
				// At the bottom and scrolling down, activate parent window's scroll
				editor.updateOptions({
					scrollbar: {
						handleMouseWheel: false,
					},
				});
			} else {
				// At the editor, activate editor scroll
				editor.updateOptions({
					scrollbar: {
						handleMouseWheel: true,
					},
				});
			}
		}
	};

	const handleEditorDidMount: OnMount = (editor, monaco) => {
		editorRef.current = editor;
		monacoRef.current = monaco;

		if (monaco) {
			console.log('monaco', editor, monaco);

			handlePreetyStateValue(jsonString);
			editor.onDidChangeModelContent(() => {
				const position = editor.getPosition();
				const lineContent = editor
					.getModel()
					.getLineContent(position.lineNumber);
				const typedText = lineContent.substring(0, position.column - 1);

				if (typedText.endsWith('{{')) {
					const visibleRange = editor.getVisibleRanges()[0];
					console.log('visibleRange', visibleRange);
					const cursorTopOffset =
						editor.getTopForLineNumber(position.lineNumber) -
						editor.getTopForLineNumber(
							visibleRange.startLineNumber
						);

					const cursorLeftOffset = editor.getOffsetForColumn(
						position.lineNumber,
						position.column
					);

					setModalPosition({
						top: cursorTopOffset + 60,
						left: cursorLeftOffset + 35,
					});

					setShowModal(true);
				}
			});
			editor.onMouseWheel(handleMouseWheel);
		}
	};

	function handleEditorValidation(markers) {
		if (showFormatErrors) {
			markers.length > 0
				? markers.forEach(marker => setMethodError(marker.message))
				: setMethodError('');
		}
	}

	const updateJSONStringCode = (value: string | undefined) => {
		if (value != undefined) setJSONString(value);
	};

	const handlePreetyStateValue = (value: string) => {
		try {
			editorRef.current
				?.getAction?.('editor.action.formatDocument')
				?.run();

			if (editorRef?.current?.setScrollPosition)
				editorRef?.current?.setScrollPosition({ scrollTop: 0 });
		} catch (err) {
			console.log('Error', err);
		}
	};

	const updateFormField = () => {
		if (methodError || showModal) return;
		else onChange?.(jsonString);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const handleDataCenterAction = (content = {}) => {
		console.log('content', content);

		const editorInstance = editorRef?.current;
		const position = editorInstance.getPosition();

		editorInstance.executeEdits('', [
			{
				range: new window.monaco.Range(
					position.lineNumber,
					position.column,
					position.lineNumber,
					position.column
				),
				text: content?.path,
				forceMoveMarkers: true,
			},
		]);
		setShowModal(false);
	};

	// Hide modal on escape keypress
	useEffect(() => {
		const handleEscape = event => {
			if (event.key === 'Escape') {
				closeModal();
			}
		};

		// Add the event listener when the component mounts
		window.addEventListener('keydown', handleEscape);

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [closeModal]);

	
	return (
		<FormControl
			disabled={disabled}
			error={error}
			required={required}
			onBlur={updateFormField}
		>
			<EditorContainer>
				<EditorHeader>
					<FormLabel>{label}</FormLabel>
					{showPrettify && (
						<Button
							onClick={() => {
								handlePreetyStateValue(jsonString);
							}}
							variant="secondary"
							color="P-50"
							size="small"
						>
							Prettify
						</Button>
					)}
				</EditorHeader>
				<CodeEditorArea error={!!methodError} height={height}>
					<Editor
						key={name}
						height={height + 'px'}
						defaultLanguage={language}
						value={jsonString}
						onChange={updateJSONStringCode}
						onValidate={handleEditorValidation}
						options={{
							readOnly: disabled,
							minimap: { enabled: false },
							overviewRulerLanes: 0,
							wordWrap: 'on',
							formatOnPaste: true,
							formatOnType: true,
							bracketPairColorization: {
								enabled: true,
							},
							scrollbar: {
								handleMouseWheel: true,
							},
						}}
						onMount={handleEditorDidMount}
					/>

					{showModal && dataCenter && (
						<ModalConatiner
							sx={{
								top: modalPosition.top,
								left: modalPosition.left,
							}}
						>
							{/* <DataCenter
								onClick={handleDataCenterAction}
								data={dataCenter}
							/> */}
							{/* <Datacenter
								onClick={handleDataCenterAction}
								data={dataCenter}
								onClose={closeModal}
							/> */}
						</ModalConatiner>
					)}
				</CodeEditorArea>
			</EditorContainer>

			{methodError ?? helperText ? (
				<FormHelperText error={!!methodError}>
					{methodError
						? `Invalid ${language}:- ${methodError}`
						: helperText}
				</FormHelperText>
			) : null}
		</FormControl>
	);
}

export default CodeEditor;

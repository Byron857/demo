import React, { useEffect, useRef } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

const ShowJSONEditor = (props) => {

    const { initJSON = {}, onError, setJsoneditor, onChange } = props;

    const JsonRef = useRef(null);
    let editor = JSONEditor;

    const handlOnChange = () => {
        try {
            const value = editor.get();
            onChange(value, editor)
        } catch (error) {

        }
    };
    const handleError = (errArr) => {
        onError(errArr);
    };

    let options = {
        mode: 'text',//view
        // modes: ['text', 'view',], // allowed modes
        onChange: handlOnChange,
        onValidationError: handleError,
        mainMenuBar: true,
        navigationBar: false,
        language: 'zh-CN'
    };


    const initEditor = () => {
        editor = new JSONEditor(JsonRef.current, options);
        editor.set(initJSON);
        setJsoneditor(editor);
    };

    const destroyEditor = () => {
        if (editor) {
            editor.destroy();
        }
    };

    useEffect(() => {
        initEditor();
        return destroyEditor;
    }, []);

    return (
        <div
            ref={JsonRef}
            style={{ width: '100%', height: '450px' }}
        ></div>
    );
};


export default ShowJSONEditor
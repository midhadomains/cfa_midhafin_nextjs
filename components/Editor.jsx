import React, { useEffect, useState } from 'react';

const HtmEditor = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const addScript = () => {
            const script = document.createElement('script');
            script.src = 'https://htmeditor.com/js/htmeditor.min.js';
            script.async = true;
            script.setAttribute('htmeditor_textarea', 'htmeditor');
            script.setAttribute('full_screen', 'no');
            script.setAttribute('editor_height', '480');
            script.setAttribute('run_local', 'no');

            script.onload = () => {
                console.log('HTMEditor script loaded');
            };

            script.onerror = () => {
                console.error('HTMEditor script failed to load');
            };

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        };

        addScript();
    }, []);

    const handleSave = () => {
        setTimeout(() => {
            const editor = document.getElementById('htmeditor');
            if (!editor) {
                console.error('Textarea element not found!');
                return;
            }

            console.log('Textarea element:', editor);

            const editorContent = editor.value;
            console.log('Captured Editor Content:', editorContent);
            setContent(editorContent);
        }, 1000); // Adjust the delay as necessary
    };

    return (
        <div>
            <textarea id="htmeditor" className='border-red-500'></textarea>
            <button onClick={handleSave}>Save Content</button>
            <div>
                <h2>Stored Content</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default HtmEditor;

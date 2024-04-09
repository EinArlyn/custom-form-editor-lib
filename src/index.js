import { FormEditor } from '@bpmn-io/form-js';
import { RenderExtension } from './components';
import { PropertiesPanelExtension } from './panels';

class CustomFormEditor {
    constructor(options) {
        const additionalModules = options.additionalModules || [];

        this.customFormEditor = new FormEditor({
            container: document.querySelector('#form-editor'),
            additionalModules: [
                ...additionalModules,
                RenderExtension,
                PropertiesPanelExtension,
            ],
        });
    }

    getEditor() {
        return this.customFormEditor;
    }
}

export default CustomFormEditor;
import { FormEditor as FE } from '@bpmn-io/form-js';
import { RenderExtension } from './components';
import { PropertiesPanelExtension } from './panels';
import '@bpmn-io/form-js/dist/assets/form-js.css';
import '@bpmn-io/form-js/dist/assets/form-js-editor.css';

class FormEditor {
    constructor(options) {
        options.additionalModules = [...(options.additionalModules || []), RenderExtension, PropertiesPanelExtension];
        this.customFormEditor = new FE(options);
    }

    importSchema(schema) {
        return this.customFormEditor.importSchema(schema);
    }
}

export default FormEditor;
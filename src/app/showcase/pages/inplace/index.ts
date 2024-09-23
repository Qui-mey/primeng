import { Component } from '@angular/core';
import { ImageDoc } from '@doc/inplace/imagedoc';
import { BasicDoc } from '@doc/inplace/basicdoc';
import { DataDoc } from '@doc/inplace/datadoc';
import { ImportDoc } from '@doc/inplace/importdoc';
import { InputDoc } from '@doc/inplace/inputdoc';
import { AccessibilityDoc } from '@doc/inplace/accessibilitydoc';
import { LazyDoc } from '@doc/inplace/lazydoc';
import { InplaceDocModule } from '@doc/inplace/inplacedoc.module';

@Component({
    standalone: true,
    imports: [InplaceDocModule],
    template: ` <app-doc
        docTitle="Angular Inplace Component"
        header="Inplace"
        description="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content."
        [docs]="docs"
        [apiDocs]="['Inplace']"
        themeDocs="Inplace"
    ></app-doc>`,
})
export class InplaceDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc,
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc,
        },
        {
            id: 'input',
            label: 'Input',
            component: InputDoc,
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc,
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc,
        },
        {
            id: 'data',
            label: 'Data',
            component: DataDoc,
        },

        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc,
        },
    ];
}
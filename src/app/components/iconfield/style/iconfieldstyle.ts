import { Injectable } from '@angular/core';
import { BaseStyle } from 'primeng/base';

const theme = ({ dt }) => `
.p-iconfield {
    position: relative;

    /* For PrimeNG */
    display: inline-block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${dt('icon.size')} / 2));
    color: ${dt('iconfield.icon.color')};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    left: ${dt('form.field.padding.x')};
}

.p-iconfield .p-inputicon:last-child {
    right: ${dt('form.field.padding.x')};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-left: calc((${dt('form.field.padding.x')} * 2) + ${dt('icon.size')});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-right: calc((${dt('form.field.padding.x')} * 2) + ${dt('icon.size')});
}
`;

const classes = {
    root: 'p-iconfield',
};

@Injectable()
export class IconFieldStyle extends BaseStyle {
    name = 'iconfield';

    theme = theme;

    classes = classes;
}

/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primeng.org/iconfield/)
 *
 * @module iconfieldstyle
 *
 */
export enum IconFieldClasses {
    /**
     * Class name of the root element
     */
    root = 'p-iconfield',
}

export interface IconFieldStyle extends BaseStyle {}

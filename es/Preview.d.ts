import * as React from 'react';
import type { DialogProps as IDialogPropTypes } from 'rc-dialog';
export interface PreviewProps extends Omit<IDialogPropTypes, 'onClose'> {
    onClose?: (e: React.SyntheticEvent<Element>) => void;
    src?: string;
    alt?: string;
    rootClassName?: string;
    icons?: {
        rotateLeft?: React.ReactNode;
        rotateRight?: React.ReactNode;
        zoomIn?: React.ReactNode;
        zoomOut?: React.ReactNode;
        close?: React.ReactNode;
        left?: React.ReactNode;
        right?: React.ReactNode;
    };
    countRender?: (current: number, total: number) => string;
}
declare const Preview: React.FC<PreviewProps>;
export default Preview;

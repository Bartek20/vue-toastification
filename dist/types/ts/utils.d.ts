import type { BasePluginOptions } from "../types/plugin";
import type { ToastContent, RenderableToastContent } from "../types/toast";
import type { ToastContainerOptions } from "../types/toastContainer";
declare const isFunction: (value: unknown) => value is Function;
declare const isString: (value: unknown) => value is string;
declare const isNonEmptyString: (value: unknown) => value is string;
declare const isUndefined: (value: unknown) => value is undefined;
declare const isToastContent: (obj: unknown) => obj is ToastContent;
declare const isDOMRect: (obj: unknown) => obj is DOMRect;
declare const hasProp: <O, K extends PropertyKey>(obj: O, propKey: K) => obj is O & { [key in K]: unknown; };
declare const getProp: <O, K extends PropertyKey, D>(obj: O, propKey: K, fallback: D) => K extends keyof O ? O[K] : D;
/**
 * ID generator
 */
declare const getId: () => number;
declare function getX(event: MouseEvent | TouchEvent): number;
declare function getY(event: MouseEvent | TouchEvent): number;
declare const removeElement: (el: Element) => void;
declare const getVueComponentFromObj: (obj: ToastContent) => RenderableToastContent;
declare const normalizeToastComponent: (obj: ToastContent) => ToastContent;
declare const isBrowser: () => boolean;
declare const asContainerProps: (options: BasePluginOptions) => ToastContainerOptions;
export { getId, getX, getY, removeElement, isString, isNonEmptyString, isToastContent, getVueComponentFromObj, normalizeToastComponent, hasProp, isUndefined, isDOMRect, isFunction, isBrowser, getProp, asContainerProps, };

import { writable } from 'svelte/store';

export const s = 0;
export const m = 1;
export const l = 2;
export const xl = 3;
export const xxl = 4;

export const breakpointStore = writable(0);

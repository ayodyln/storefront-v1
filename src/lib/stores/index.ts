import { writable, type Writable } from 'svelte/store';

/**
 *~ Mobile menu
 *? Off-canvas menu for mobile, show/hide based on off-canvas menu state.
 *! true: sets the menu to be hidden by defualt via CSS class.
 */
export const mobileMenuState: Writable<boolean> = writable(true);

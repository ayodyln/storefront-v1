import { mobileMenuState } from '$lib/stores';

export const toggleMenu = () => mobileMenuState.update((val) => (val = !val));

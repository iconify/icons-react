import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k40w-4bdn {
  fill: currentColor;
  d: path("M24.5 3A4.5 4.5 0 0 1 29 7.5v13a4.5 4.5 0 0 1-4.025 4.475A4.5 4.5 0 0 1 20.5 29h-10A7.5 7.5 0 0 1 3 21.5v-10a4.5 4.5 0 0 1 4.024-4.476A4.5 4.5 0 0 1 11.5 3zM7 9.05a2.5 2.5 0 0 0-2 2.45v10a5.5 5.5 0 0 0 5.5 5.5h10a2.5 2.5 0 0 0 2.45-2H11.5A4.5 4.5 0 0 1 7 20.5zM11.5 5A2.5 2.5 0 0 0 9 7.5v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 24.5 5zM23 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-5.586l-8.293 8.293a1 1 0 1 1-1.414-1.414L20.586 10H15a1 1 0 1 1 0-2z");
}
</style><path class="k40w-4bdn"/>`,
		"fallback": "fluent:window-new-32-regular",
	});
}

export default Component;

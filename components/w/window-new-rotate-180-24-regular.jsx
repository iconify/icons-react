import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ma-38_a_d {
  fill: currentColor;
  d: path("M6.25 21A3.25 3.25 0 0 1 3 17.75v-8.5a3.25 3.25 0 0 1 3.01-3.24A3.25 3.25 0 0 1 9.25 3h6A5.75 5.75 0 0 1 21 8.75v6a3.25 3.25 0 0 1-3.009 3.241A3.25 3.25 0 0 1 14.75 21zM18 16.48a1.75 1.75 0 0 0 1.5-1.73v-6a4.25 4.25 0 0 0-4.25-4.25h-6c-.882 0-1.609.652-1.73 1.5h7.23A3.25 3.25 0 0 1 18 9.25zm-3.25 3.02a1.75 1.75 0 0 0 1.75-1.75v-8.5a1.75 1.75 0 0 0-1.75-1.75h-8.5A1.75 1.75 0 0 0 4.5 9.25v8.5c0 .966.784 1.75 1.75 1.75zm-7-2.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.22-4.22a.75.75 0 0 1 1.06 1.06L9.56 15.5h2.69a.75.75 0 0 1 0 1.5z");
}
</style><path class="ma-38_a_d"/>`,
		"fallback": "fluent:window-new-rotate-180-24-regular",
	});
}

export default Component;

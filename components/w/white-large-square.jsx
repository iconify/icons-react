import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yhj2esbqb {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M6.93 1C3.67 1 1 3.67 1 6.93v114.14c0 3.26 2.67 5.93 5.93 5.93h114.14c3.26 0 5.93-2.67 5.93-5.93V6.93c0-3.26-2.67-5.93-5.93-5.93z");
}
</style><path class="yhj2esbqb"/>`,
		"fallback": "noto-v1:white-large-square",
	});
}

export default Component;

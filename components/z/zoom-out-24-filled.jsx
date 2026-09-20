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
		"content": `<style>.zm67rebic {
  fill: currentColor;
  d: path("M10 2a8 8 0 0 1 6.162 13.102l4.618 4.618a.75.75 0 0 1-1.06 1.06l-4.618-4.618A8 8 0 1 1 10 2M7.25 9.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="zm67rebic"/>`,
		"fallback": "fluent:zoom-out-24-filled",
	});
}

export default Component;

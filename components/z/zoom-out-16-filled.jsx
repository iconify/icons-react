import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e6qbir8_l {
  fill: currentColor;
  d: path("M6.5 1a5.5 5.5 0 0 1 4.227 9.02l3.127 3.127a.5.5 0 1 1-.707.707l-3.127-3.127A5.5 5.5 0 1 1 6.5 1m-2 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="e6qbir8_l"/>`,
		"fallback": "fluent:zoom-out-16-filled",
	});
}

export default Component;

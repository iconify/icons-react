import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g460u2b6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.485 33.929a6.53 6.53 0 0 1-4.725-2.023L24 30.062l-1.76 1.844a6.53 6.53 0 0 1-9.45 0L6.307 25.11a6.53 6.53 0 0 1 .217-9.232a6.527 6.527 0 0 1 9.232.217l1.76 1.844l1.76-1.844a6.53 6.53 0 0 1 9.45 0l1.76 1.844l1.76-1.844a6.527 6.527 0 0 1 9.232-.217a6.53 6.53 0 0 1 .217 9.232l-6.485 6.796a6.53 6.53 0 0 1-4.724 2.023m-8.814-6.306L24 30.062");
}
</style><path class="g460u2b6i"/>`,
		"fallback": "arcticons:whatnot",
	});
}

export default Component;

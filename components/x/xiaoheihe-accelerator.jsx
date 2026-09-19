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
		"content": `<style>.lm69f68vr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.418 5.5L8.185 29.191H21.1l1.55-2.495M20.582 42.5l19.233-23.691H26.9l-1.55 2.495");
}
</style><path class="lm69f68vr"/>`,
		"fallback": "arcticons:xiaoheihe-accelerator",
	});
}

export default Component;

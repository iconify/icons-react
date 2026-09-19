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
		"content": `<style>.luxoa1i-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 5.77l-7.251 11.29l-25.548.02L5.5 42.23l6.802-10.783l25.716-.072Z");
}
</style><path class="luxoa1i-p"/>`,
		"fallback": "arcticons:whats-up",
	});
}

export default Component;

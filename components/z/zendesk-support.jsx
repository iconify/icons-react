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
		"content": `<style>.hfwzo-b1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 38.95l18.2-20.8v20.8zm20.8 0a9.1 9.1 0 1 1 18.2 0zm18.2-29.9l-18.2 20.8V9.05zm-20.8 0a9.1 9.1 0 1 1-18.2 0z");
}
</style><path class="hfwzo-b1m"/>`,
		"fallback": "arcticons:zendesk-support",
	});
}

export default Component;

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
		"content": `<style>.hwy5nxb-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 38.95l18.2-20.8v20.8zm20.8 0a9.1 9.1 0 0 1 9.1-9.1h0a9.1 9.1 0 0 1 9.1 9.1zm18.2-29.9l-18.2 20.8V9.05zm-20.8 0a9.1 9.1 0 0 1-9.1 9.1h0a9.1 9.1 0 0 1-9.1-9.1z");
}
</style><path class="hwy5nxb-f"/>`,
		"fallback": "arcticons:zendesk-support",
	});
}

export default Component;

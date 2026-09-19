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
		"content": `<style>.wltr_tnpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.14 11a5.91 5.91 0 0 1 9.72 0L42.5 30.71a5.62 5.62 0 0 1-7.33 8.13l-7.31-4a8 8 0 0 0-7.71 0l-7.32 4a5.62 5.62 0 0 1-7.33-8.13Z");
}
</style><path class="wltr_tnpx"/>`,
		"fallback": "arcticons:yaauto",
	});
}

export default Component;

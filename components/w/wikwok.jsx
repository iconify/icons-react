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
		"content": `<style>.qfcm34bit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.195h12.188m14.625 0H43.5m-6.094 0l-6.704 11.61L24 18.195l-6.703 11.61l-6.703-11.61");
}
</style><path class="qfcm34bit"/>`,
		"fallback": "arcticons:wikwok",
	});
}

export default Component;

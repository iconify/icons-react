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
		"content": `<style>.ijklq_2vl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.46 5.5l9.9 5.5v10.69l9.4-5.43l10.08 5.61l-19.48 11.26l-5 2.9l-4.9 2.83l-6.3 3.64V31.06l6.3-3.64z");
}
</style><path class="ijklq_2vl"/>`,
		"fallback": "arcticons:yatse",
	});
}

export default Component;

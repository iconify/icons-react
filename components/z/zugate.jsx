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
		"content": `<style>.d3h2c346f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.203 5.5h25.644L21.858 33.204h14.354l4 9.296H7.788l11.988-27.704h-5.45z");
}
</style><path class="d3h2c346f"/>`,
		"fallback": "arcticons:zugate",
	});
}

export default Component;

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
		"content": `<style>.erbm33b1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.614 32.652l10.247-12.536l8.732 6.449l11.256-14.048");
}

.ggcwaserw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.783 11.015v25.97h38.434");
}
</style><path class="ggcwaserw"/><path class="erbm33b1r"/>`,
		"fallback": "arcticons:y-trac",
	});
}

export default Component;

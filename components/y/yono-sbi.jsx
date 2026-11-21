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
		"content": `<style>.hfjub6bdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.22 46a22 22.02 0 1 0-2.44 0V27.65a3.67 3.67 0 1 1 2.44 0z");
}
</style><path class="hfjub6bdx"/>`,
		"fallback": "arcticons:yono-sbi",
	});
}

export default Component;

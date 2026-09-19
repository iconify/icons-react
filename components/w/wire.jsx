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
		"content": `<style>.mt5f6pb4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 9.55V28.7a11.63 11.63 0 0 1-11.63 11.63h0A11.63 11.63 0 0 1 20.24 28.7V11.42A3.77 3.77 0 0 1 24 7.66h0");
}

.yrnmrjb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 9.55V28.7a11.63 11.63 0 0 0 11.63 11.63h0A11.63 11.63 0 0 0 27.76 28.7V11.42A3.77 3.77 0 0 0 24 7.66h0");
}
</style><path class="yrnmrjb0g"/><path class="mt5f6pb4z"/>`,
		"fallback": "arcticons:wire",
	});
}

export default Component;

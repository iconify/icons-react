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
		"content": `<style>.ozvo0konv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.571 10.56L6.57 14.557v18.897L23.999 43.5V31.08m10.43 6.36l7.002-3.996V14.547L24.001 4.5v12.42");
}
</style><path class="ozvo0konv"/>`,
		"fallback": "arcticons:xiaoheihe",
	});
}

export default Component;

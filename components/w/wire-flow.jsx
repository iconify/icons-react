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
		"content": `<style>.c9o58u-lo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 14.117l12.962 19.766m12.962-19.766l-4.041 6.163m-4.992 7.612l-3.93 5.991m.115-19.766l12.962 19.766M43.5 14.117L30.538 33.883");
}
</style><path class="c9o58u-lo"/>`,
		"fallback": "arcticons:wire-flow",
	});
}

export default Component;

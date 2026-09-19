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
		"content": `<style>.hljqs0mlf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 39.93a167 167 0 0 1 37 0M5.5 8.07a167 167 0 0 0 37 0M14.75 39.16V8.84m18.5.134v30.062");
}
</style><path class="hljqs0mlf"/>`,
		"fallback": "arcticons:xenia",
	});
}

export default Component;

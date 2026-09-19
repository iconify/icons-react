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
		"content": `<style>.uz924cbhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.275 13.707h25.45V39.94a3.56 3.56 0 0 1-3.56 3.56h-18.33a3.56 3.56 0 0 1-3.56-3.56zm19.678-6.138l-.89-3.069H17.937l-.89 3.069H9.328v6.138h29.344V7.569z");
}
</style><path class="uz924cbhv"/>`,
		"fallback": "arcticons:whatsdeleted",
	});
}

export default Component;

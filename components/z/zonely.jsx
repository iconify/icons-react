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
		"content": `<style>.ewfqgnljx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4M24 42.5v-37m-12.341 0v1");
}

.t9tzg47ih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.659 41.5v1");
}

.tedbs0qgd {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 0 0 2.059 2.059;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.659 8.559v31.912");
}
</style><path class="ewfqgnljx"/><path class="tedbs0qgd"/><path class="t9tzg47ih"/>`,
		"fallback": "arcticons:zonely",
	});
}

export default Component;

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
		"content": `<style>.gd1we6qep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.585 15.07v-8m-4 4h8m-6.5 2.5l5-5m-5 0l5 5");
}

.u_5pqkbtb {
  cx: 36.585px;
  cy: 11.07px;
  r: 6.915px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w37cbd8vp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.67 11.07L18.23 36.93L8.15 11.07");
}

.yeu-xu84m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.07h7.3m4.99 0h5.52m7.36 0h-2.42m-7.7 0l10.53 25.86l7.431-19.008");
}
</style><path class="yeu-xu84m"/><path class="w37cbd8vp"/><circle class="u_5pqkbtb"/><path class="gd1we6qep"/>`,
		"fallback": "arcticons:wikipedia-beta",
	});
}

export default Component;

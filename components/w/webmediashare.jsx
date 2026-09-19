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
		"content": `<style>.ezn6mtb2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.5 39.5a19 19 0 0 0-19-19h0");
}

.fvh40ebmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.3 39.5A12.8 12.8 0 0 0 4.5 26.7h0");
}

.y2--v8-pf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.5 39.5h14a2 2 0 0 0 2-2v-27a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v6m0 16a7 7 0 0 1 7 7v0h0h-7h0z");
}
</style><path class="y2--v8-pf"/><path class="ezn6mtb2h"/><path class="fvh40ebmr"/>`,
		"fallback": "arcticons:webmediashare",
	});
}

export default Component;

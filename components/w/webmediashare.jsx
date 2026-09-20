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
		"content": `<style>.hk6pe8bym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.5 39.5h14a2 2 0 0 0 2-2v-27a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v6m0 16za7 7 0 0 1 7 7h-7z");
}

.pllecziwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.5 39.5za19 19 0 0 0-19-19");
}

.z4p9hubyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.3 39.5zA12.8 12.8 0 0 0 4.5 26.7");
}
</style><path class="hk6pe8bym"/><path class="pllecziwn"/><path class="z4p9hubyz"/>`,
		"fallback": "arcticons:webmediashare",
	});
}

export default Component;

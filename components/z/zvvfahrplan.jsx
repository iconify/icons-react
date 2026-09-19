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
		"content": `<style>.aeyym_byd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.39 23.85v-6.24h-6.24m6.24 0L17.61 30.39");
}

.ceoja1f8a {
  cx: 38.34px;
  cy: 9.66px;
  r: 4.16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l43864bee {
  cx: 9.66px;
  cy: 38.34px;
  r: 4.16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="aeyym_byd"/><circle class="l43864bee"/><circle class="ceoja1f8a"/>`,
		"fallback": "arcticons:zvvfahrplan",
	});
}

export default Component;

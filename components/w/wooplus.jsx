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
		"content": `<style>.es6-3qb-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 30.888a62 62 0 0 0 6.141 5.177s10.496-7.512 12.876-14.358c.307-.8.483-1.666.483-2.575a7.2 7.2 0 0 0-7.198-7.198a7.19 7.19 0 0 0-6.136 3.45");
}

.jaqfylggf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.217 19.132a7.2 7.2 0 0 0-7.198-7.198a7.19 7.19 0 0 0-6.16 3.49a7.19 7.19 0 0 0-6.161-3.49A7.2 7.2 0 0 0 4.5 19.133c0 .909.175 1.775.483 2.575c2.38 6.846 12.875 14.359 12.875 14.359s10.496-7.513 12.876-14.359c.308-.8.483-1.666.483-2.575");
}
</style><path class="jaqfylggf"/><path class="es6-3qb-t"/>`,
		"fallback": "arcticons:wooplus",
	});
}

export default Component;

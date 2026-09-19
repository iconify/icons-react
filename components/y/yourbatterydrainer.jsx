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
		"content": `<style>.cje6x84oj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.376 10.854L21.78 13.7l-8.283 9.91l-3.405-2.845Zm5.535 4.583l3.405 2.846l-8.282 9.911l-3.405-2.846Zm5.583 4.58l3.406 2.845l-8.283 9.911l-3.405-2.846Zm10.164 12.162l2.642 2.208l-5.139 6.15l-2.643-2.209Z");
}

.tphcpek5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.694 6.918L42.04 27.264a1.278 1.278 0 0 1-.011 1.976l-9.982 11.944a1.3 1.3 0 0 1-1.797-.121L5.954 20.759a1.243 1.243 0 0 1-.158-1.773L15.82 6.993a1.2 1.2 0 0 1 1.874-.074Z");
}
</style><path class="tphcpek5w"/><path class="cje6x84oj"/>`,
		"fallback": "arcticons:yourbatterydrainer",
	});
}

export default Component;

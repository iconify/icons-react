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
		"content": `<style>.r288kpngy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 19.09c.238 1.211 11.346 22.229 11.698-4.962c.062 16.39-4.812 22.372-7.689 24.167m11.445-21.869c1.675 10.736 9.828 11.919 9.561-3.13m3.46-1.227c.183 5.473 6.23 11.5 6.525-2.364");
}
</style><path class="r288kpngy"/>`,
		"fallback": "arcticons:yuu",
	});
}

export default Component;

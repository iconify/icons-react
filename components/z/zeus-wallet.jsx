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
		"content": `<style>.qfcoy-n4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.41 4.5H10.59l5.853 11.155S20.503 6.924 31.052 4.5l-20.462 39h26.82l-5.853-11.155s-4.06 8.732-14.609 11.155z");
}
</style><path class="qfcoy-n4y"/>`,
		"fallback": "arcticons:zeus-wallet",
	});
}

export default Component;

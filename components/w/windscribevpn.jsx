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
		"content": `<style>.emedp0btc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.82 14.48V33.7h3.07a3.43 3.43 0 0 0 2.2-1L24 27.34l5.9 5.38a3.52 3.52 0 0 0 2.21 1h3.07V14.48");
}

.rkelngbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 44.5l-14.5-6l-6-14.5l6-14.5l14.5-6l14.5 6l6 14.5l-6 14.5Z");
}
</style><path class="rkelngbtw"/><path class="emedp0btc"/>`,
		"fallback": "arcticons:windscribevpn",
	});
}

export default Component;

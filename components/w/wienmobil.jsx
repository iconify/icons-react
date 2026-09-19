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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qgxhq1ttb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m45.5 24l-16.359 2.6a3.06 3.06 0 0 0-2.54 2.541L24 45.5l-2.6-16.359a3.06 3.06 0 0 0-2.541-2.54L2.499 24l16.36-2.6a3.06 3.06 0 0 0 2.54-2.541L24 2.499l2.602 16.36a3.06 3.06 0 0 0 2.54 2.54z");
}
</style><circle class="cpk0fnbgt"/><path class="qgxhq1ttb"/>`,
		"fallback": "arcticons:wienmobil",
	});
}

export default Component;

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

.q4-4zactv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.217 25.749l5.824 11.243L33.049 4.494M28.18 26.351l5.512 10.641l10.301-20.911");
}
</style><circle class="cpk0fnbgt"/><path class="q4-4zactv"/>`,
		"fallback": "arcticons:wiwinsafekeeping",
	});
}

export default Component;

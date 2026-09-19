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

.ljbfoevkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.581 30.75a21.509 21.509 0 0 1 40.838 0m-33.185-2.432h8.822m7.888 0h8.822");
}
</style><circle class="cpk0fnbgt"/><path class="ljbfoevkk"/>`,
		"fallback": "arcticons:wtmp",
	});
}

export default Component;

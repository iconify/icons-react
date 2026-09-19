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
		"content": `<style>.bpwg77ejr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.25 38.077a21.5 21.5 0 0 1-.005-28.149M7.74 38.077a21.5 21.5 0 0 0 .005-28.149M9.92 40.257a21.5 21.5 0 0 1 28.15-.005M9.92 7.748a21.5 21.5 0 0 0 28.15.005");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="bpwg77ejr"/>`,
		"fallback": "arcticons:yandex-pro-taximeter",
	});
}

export default Component;

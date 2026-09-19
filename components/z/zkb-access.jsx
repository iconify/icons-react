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
		"content": `<style>.ilp10npaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.187 23.756H43.5m-9.727 5.15v-5.15m9.727 0v9.331");
}

.olytz1bis {
  cx: 13.344px;
  cy: 23.756px;
  r: 8.844px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="olytz1bis"/><path class="ilp10npaa"/>`,
		"fallback": "arcticons:zkb-access",
	});
}

export default Component;

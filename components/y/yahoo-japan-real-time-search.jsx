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
		"content": `<style>.xxb8wg1wi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5a21.5 21.5 0 0 0 12.705-4.223l5.594 1.022l-1.022-5.594A21.5 21.5 0 0 0 45.5 24c0-11.874-9.626-21.5-21.5-21.5");
}

.zl9eo9b9a {
  cx: 23.5px;
  cy: 23.5px;
  r: 12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zllurnbjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.985 31.985l4.323 4.323");
}
</style><path class="xxb8wg1wi"/><circle class="zl9eo9b9a"/><path class="zllurnbjw"/>`,
		"fallback": "arcticons:yahoo-japan-real-time-search",
	});
}

export default Component;

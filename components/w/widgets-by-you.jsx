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
		"content": `<style>.asflotbxb {
  width: 16px;
  height: 24px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.xoaa3kbol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.444a4 4 0 0 0 0-8h-29a4 4 0 0 0 0 8z");
}

.xqmxtbcxi {
  width: 16px;
  height: 24px;
  x: 26.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="xoaa3kbol"/><rect class="asflotbxb"/><rect class="xqmxtbcxi"/>`,
		"fallback": "arcticons:widgets-by-you",
	});
}

export default Component;

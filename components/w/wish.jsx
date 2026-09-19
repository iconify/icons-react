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
		"content": `<style>.gizux1b9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.917 28.754a5.84 5.84 0 0 0 5.909 6.983a8.45 8.45 0 0 0 8.057-6.983");
}

.ii8_8-bgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.883 28.754a5.84 5.84 0 0 0 5.908 6.983a8.45 8.45 0 0 0 8.058-6.983m0 0l.651-9.063m-14.617 9.063l.651-5.868m-14.617 5.868l1.246-11.811L4.5 12.263");
}
</style><path class="gizux1b9s"/><path class="ii8_8-bgh"/>`,
		"fallback": "arcticons:wish",
	});
}

export default Component;

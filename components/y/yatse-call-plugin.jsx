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
		"content": `<style>.s_55pwehq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.46 5.5l9.9 5.5v10.69l9.4-5.43l10.08 5.61l-19.48 11.26l-5 2.9l-4.9 2.83l-6.3 3.64V31.06l6.3-3.64zm18.116 31.618l1.469-.868l-.2-2.07H29.64c.956 4.54 3.022 6.697 8.145 7.41l.133-1.735l-2.136-.334l-1.001 1.002");
}
</style><path class="s_55pwehq"/>`,
		"fallback": "arcticons:yatse-call-plugin",
	});
}

export default Component;

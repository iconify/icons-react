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
		"content": `<style>.lz1qsm-2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.146 5.589l6.224.1l6.901 10.214l-3.336 4.83zm11.258 17.643L32.25 5.5l6.4.04l-11.58 17.716L39.867 42.5l-6.677-.019zM8.133 42.409l10.833-16.757l3.313 4.859l-7.92 11.983z");
}
</style><path class="lz1qsm-2j"/>`,
		"fallback": "arcticons:xplora",
	});
}

export default Component;

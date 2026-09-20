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
		"content": `<style>.aj_5pd36r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 41.663l.02-35.326l4.086 1.947l-.013 20.073l7.963-16.308l4.37 2.096v13.893l5.921-11.091l3.621 1.756l-5.348 13.16l-8.29 3.943l-.044-14.071l-6.907 17.34zm30.955-20.606l6.045 2.902l-8.97 4.344z");
}
</style><path class="aj_5pd36r"/>`,
		"fallback": "arcticons:wizestream",
	});
}

export default Component;

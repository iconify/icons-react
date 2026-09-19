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
		"content": `<style>.hjalsrb7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.13 36.411c8.188-1.906 15.337-2.327 26.048-2.804c-.954-9.869 1.093-20.691 2.663-24.616C22.318 16 11.551 27.83 8.131 36.41");
}

.m8e-yfg9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.026 25.161c-1.556-1.409-5.09-1.43-6.897 1.598m6.897-1.598c-.506 2.037 1.145 5.16 4.668 5.323m-4.668-5.323c2.034-.517 4.006-3.448 2.485-6.63");
}
</style><path class="hjalsrb7f"/><path class="m8e-yfg9g"/>`,
		"fallback": "arcticons:windfinder",
	});
}

export default Component;

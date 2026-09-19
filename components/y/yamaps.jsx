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
		"content": `<style>.hw33z0c_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.93 4.25a12 12 0 1 0 12.13 11.9h0a12 12 0 0 0-12.13-11.9m0 7.43a4.57 4.57 0 0 1 4.61 4.52v0A4.59 4.59 0 1 1 24 11.68Z");
}

.plsh0ebyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.82 18.66C33.45 27.32 27 34 21.46 43.25l3.05-15");
}
</style><path class="hw33z0c_p"/><path class="plsh0ebyj"/>`,
		"fallback": "arcticons:yamaps",
	});
}

export default Component;

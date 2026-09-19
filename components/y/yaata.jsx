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
		"content": `<style>.dsogtngbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39 9.512H9a2 2 0 0 0-2 2v26.976l6.977-6.976H39a2 2 0 0 0 2-2v-18a2 2 0 0 0-2-2m-3.056 11.102H12.056m13.028 5.767H12.056m23.888-11.533H12.056");
}
</style><path class="dsogtngbm"/>`,
		"fallback": "arcticons:yaata",
	});
}

export default Component;

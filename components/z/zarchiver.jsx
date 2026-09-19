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
		"content": `<style>.js2i01-yx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.89 7.05h23.53l-11 25.42h13.17L34.26 41H4.51l11-25.42h-5zm23.53 0L43.51 41h-9.25L24 17.25");
}
</style><path class="js2i01-yx"/>`,
		"fallback": "arcticons:zarchiver",
	});
}

export default Component;

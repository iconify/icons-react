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
		"content": `<style>.rhmx8ibyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.212 10.212c7.615-7.616 19.962-7.616 27.577 0L10.21 37.789c7.616 7.615 19.963 7.615 27.578 0");
}
</style><path class="rhmx8ibyk"/>`,
		"fallback": "arcticons:zlantar",
	});
}

export default Component;

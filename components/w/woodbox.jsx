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
		"content": `<style>.vxre9xbgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.748 4.838l6.237 7.484a.998.998 0 0 1-.748 1.497h-3.243l6.985 8.981a.998.998 0 0 1-.748 1.497h-5.739l9.98 11.975a.998.998 0 0 1-.749 1.497H11.277a.998.998 0 0 1-.749-1.497l9.98-11.975h-5.739a.998.998 0 0 1-.748-1.497l6.985-8.98h-3.243a.998.998 0 0 1-.748-1.498l6.237-7.484a.998.998 0 0 1 1.497 0m2.245 32.931v4.733a1 1 0 0 1-.998.998h-3.992a1 1 0 0 1-.998-.998V37.77");
}
</style><path class="vxre9xbgx"/>`,
		"fallback": "arcticons:woodbox",
	});
}

export default Component;

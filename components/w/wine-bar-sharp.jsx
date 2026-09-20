import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vafv5ogol {
  fill: currentColor;
  d: path("M8.692 20v-1H11.5v-4.523q-2.15-.33-3.383-1.875T6.884 9V4h10.232v5q0 2.058-1.233 3.602T12.5 14.477V19h2.808v1zM7.884 8.5h8.231V5h-8.23z");
}
</style><path class="vafv5ogol"/>`,
		"fallback": "material-symbols-light:wine-bar-sharp",
	});
}

export default Component;

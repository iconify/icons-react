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
		"content": `<style>.xf-w4_b0h {
  fill: currentColor;
  d: path("M11.5 19v-4.523q-2.15-.33-3.383-1.875T6.884 9V4.815q0-.355.233-.585T7.692 4h8.616q.343 0 .575.232t.233.576V9q0 2.058-1.233 3.602T12.5 14.477V19h2.308q.212 0 .356.144t.144.357t-.144.356t-.356.143H9.192q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143zM7.885 8.5h8.23V5h-8.23z");
}
</style><path class="xf-w4_b0h"/>`,
		"fallback": "material-symbols-light:wine-bar-rounded",
	});
}

export default Component;

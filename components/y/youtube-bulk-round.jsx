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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.n3ea6gw5u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5Z");
}

.uaee-ubry {
  d: path("M9 9a1 1 0 0 1 1.514-.857l5 3a.997.997 0 0 1 0 1.714l-5 3A.997.997 0 0 1 9 15Z");
}
</style><g class="cuyn6tgcc"><path class="n3ea6gw5u"/><path class="uaee-ubry"/></g>`,
		"fallback": "coolicons:youtube-bulk-round",
	});
}

export default Component;

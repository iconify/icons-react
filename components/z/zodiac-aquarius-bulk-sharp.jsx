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

.s6p7t_b3w {
  d: path("M5.293 6.293a.997.997 0 0 1 1.414 0L9 8.586l2.293-2.293a.997.997 0 0 1 1.414 0L15 8.586l2.293-2.293a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414L18 8.414l-2.293 2.293a1 1 0 0 1-1.414 0L12 8.414l-2.293 2.293a1 1 0 0 1-1.414 0L6 8.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414Z");
}

.wcjtmacbt {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.293 13.293a1 1 0 0 1 1.414 0L9 15.586l2.293-2.293a1 1 0 0 1 1.414 0L15 15.586l2.293-2.293a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414L18 15.414l-2.293 2.293a1 1 0 0 1-1.414 0L12 15.414l-2.293 2.293a1 1 0 0 1-1.414 0L6 15.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414Z");
}
</style><g class="cuyn6tgcc"><path class="wcjtmacbt"/><path class="s6p7t_b3w"/></g>`,
		"fallback": "coolicons:zodiac-aquarius-bulk-sharp",
	});
}

export default Component;

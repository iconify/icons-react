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
		"content": `<style>.lruds70zl {
  d: path("M12 2.5L22 21H2Z");
}

.rroxk1enw {
  d: path("M12 15c-2-1.5-2-4.5 0-7.5c2 3 2 6 0 7.5Zm0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lruds70zl"/><path class="rroxk1enw"/></g>`,
		"fallback": "uix-sharp:weed-killer-warning",
	});
}

export default Component;

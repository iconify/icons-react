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
		"content": `<style>.dky1obbkr {
  d: path("M10.25 3h5l.34 1.46l3.57 15.08l.34 1.46h-15l.34-1.46L8.41 4.46L8.75 3z");
}

.hq3---55g {
  d: path("M12 8.5c1.75 2 2.5 3.25 2.5 4.5a2.5 2.5 0 0 1-5 0c0-1.25.75-2.5 2.5-4.5ZM8.5 18h7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dky1obbkr"/><path class="hq3---55g"/></g>`,
		"fallback": "iconoven:wet-floor-sharp",
	});
}

export default Component;

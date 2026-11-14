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
		"content": `<style>.bh8737n7a {
  d: path("M16.5 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.h-ormzb6m {
  d: path("M5 7.5c0 7.5 14 1.5 14 9");
}

.kg-44fb7x {
  d: path("M2.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kg-44fb7x"/><path class="h-ormzb6m"/><path class="bh8737n7a"/></g>`,
		"fallback": "uix-sharp:wire",
	});
}

export default Component;

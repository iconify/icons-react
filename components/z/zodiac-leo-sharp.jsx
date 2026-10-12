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
		"content": `<style>.e2f6y-bch {
  cx: 7px;
  cy: 14.75px;
  r: 3px;
}

.gic6dl85y {
  d: path("M9.75 12.25C8.5 9.75 8 8.25 8 7a4.25 4.25 0 0 1 8.5 0c0 3-2.5 6-2.5 9.5c0 2 1.25 3.5 3 3.5h1.75l.75-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gic6dl85y"/><circle class="e2f6y-bch"/></g>`,
		"fallback": "iconoven:zodiac-leo-sharp",
	});
}

export default Component;

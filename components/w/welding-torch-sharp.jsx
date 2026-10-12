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
		"content": `<style>.gwnff0i_y {
  d: path("M10.9 18.5Q8 21.25 2.75 21m12.65-7l1.5-1.5l1.75-1.75v-1m-1.4-3V4.904l1.4-2.154l1.4 2.154V6.75Z");
}

.oo45lqbjg {
  d: path("m10.19 16.03l2.74-2.74l.88-.88l.88.88l1.42 1.42l.88.88l-.88.88l-2.74 2.74l-.88.88l-.88-.88l-1.42-1.42l-.88-.88z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oo45lqbjg"/><path class="gwnff0i_y"/></g>`,
		"fallback": "iconoven:welding-torch-sharp",
	});
}

export default Component;

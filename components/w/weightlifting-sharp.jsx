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
		"content": `<style>.fsgj09ihv {
  d: path("M2.75 2.75H5.5v4H2.75zm15.75 0h2.75v4H18.5zm-13 2h13m-12 0l2.5 6.5h6l2.5-6.5M12 10v5m0 0l-4.5 2L9 21.25M12 15l4.5 2l-1.5 4.25");
}

.ug2k5qb5o {
  cx: 12px;
  cy: 8.75px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fsgj09ihv"/><circle class="ug2k5qb5o"/></g>`,
		"fallback": "iconoven:weightlifting-sharp",
	});
}

export default Component;

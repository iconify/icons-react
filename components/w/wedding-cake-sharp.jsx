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
		"content": `<style>.diquzrbgv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.25h6v3H9zm-2.5 6h11v3h-11zm-2.5 6h16v3H4z");
}

.ej4_3wbll {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="diquzrbgv"/><path class="ej4_3wbll"/></g>`,
		"fallback": "iconoven:wedding-cake-sharp",
	});
}

export default Component;

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
		"content": `<style>.lqx7whxps {
  d: path("M2.5 14h19v5h-19Zm1 0L5 8.5h3.5L10 14m8.5 0v-1.75a1.5 1.5 0 0 1 3 0V14");
}

.nw66r3bzx {
  d: path("M12.5 14c0-6.5 3.5-10 6-9c2 .75 1 4-1.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lqx7whxps"/><path class="nw66r3bzx"/></g>`,
		"fallback": "uix-sharp:woodworking",
	});
}

export default Component;

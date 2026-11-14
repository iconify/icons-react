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
		"content": `<style>.f9xfw6bcw {
  d: path("M7 18.5v-6a1.75 1.75 0 0 1 3.5 0v6Zm1.75-7.75V7m4.75 11.5v-6a1.75 1.75 0 0 1 3.5 0v6Zm1.75-7.75V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uh1ab-bsl {
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v12a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18V6a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="uh1ab-bsl"/><path class="f9xfw6bcw"/></g>`,
		"fallback": "uix:wine-fridge",
	});
}

export default Component;

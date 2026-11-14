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
		"content": `<style>.h9a4fi4en {
  d: path("M2.5 2.5h19v19h-19Zm0 4.5h19m-14 11.75l9-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqsbckbvb {
  d: path("M13 9.75h3.5v3.5m-9 2v3.5H11");
}
</style><g class="ulnmmdpxh"><path class="h9a4fi4en"/><path class="vqsbckbvb"/></g>`,
		"fallback": "uix-sharp:window-maximize",
	});
}

export default Component;

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
		"content": `<style>.gibxw12mx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19v2.5h-19Zm2 2.5v7m15-7v7M13 5h4v7h-4ZM7.5 6h3v6h-3Zm-4 3h4m-4-2.5v5");
}
</style><path class="gibxw12mx"/>`,
		"fallback": "uix-sharp:workshop-room",
	});
}

export default Component;

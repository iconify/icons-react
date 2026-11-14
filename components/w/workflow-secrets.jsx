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
		"content": `<style>.vn7bjsd-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h6v6h-6Zm11.5 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-11.5 8h6v6h-6Zm6-8H14m-8.5 3v5m9 6.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}
</style><path class="vn7bjsd-c"/>`,
		"fallback": "uix-sharp:workflow-secrets",
	});
}

export default Component;

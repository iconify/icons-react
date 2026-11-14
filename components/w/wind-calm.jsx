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
		"content": `<style>.zbhdgizoa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5v19M10 4h7v11q-3.5-1.5-7 1m-3.5 5.5h7m0-15V12");
}
</style><path class="zbhdgizoa"/>`,
		"fallback": "uix-sharp:wind-calm",
	});
}

export default Component;

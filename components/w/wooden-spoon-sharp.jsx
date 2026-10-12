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
		"content": `<style>.uvryblbeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.92 11.08h0l-1.24-1.24l1.13-1.65l2.34-3.42l1.13-1.65l1.41 1.41l1.78 1.78l1.41 1.41l-1.65 1.13l-3.42 2.34l-1.65 1.13zM18 6l-1.75 1.75m-4.5 5.56l-1.06-1.06l-.88-.88l-.88.88l-4.74 4.74l-.88.88l.88.88l1.06 1.06l.88.88l.88-.88l4.74-4.74l.88-.88z");
}
</style><path class="uvryblbeq"/>`,
		"fallback": "iconoven:wooden-spoon-sharp",
	});
}

export default Component;

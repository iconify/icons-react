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
		"content": `<style>.pd4hltp0l {
  d: path("M12.3 19.5H2.5v-17h17v10.8M9 2.5v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5fx7z7fg {
  d: path("M12.5 5.5h4v4.25h-4Zm0 4.25h4V14h-4ZM14.75 18l2 2L21 15.75");
}
</style><g class="ulnmmdpxh"><path class="pd4hltp0l"/><path class="x5fx7z7fg"/></g>`,
		"fallback": "uix-sharp:window-sensor-closed",
	});
}

export default Component;

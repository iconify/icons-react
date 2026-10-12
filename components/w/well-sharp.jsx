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
		"content": `<style>.g5a12gbow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8L12 3l9.25 5M5.5 6.51v9.99m13-9.99v9.99M5.5 9h13M12 9v2.5m-1.75 0h4l-.14.48l-.47 1.54l-.14.48h-3l-.14-.48l-.47-1.54l-.14-.48zm-6 5h15.5v4.75H4.25zm0 2.38h15.5M12 16.5v2.38");
}
</style><path class="g5a12gbow"/>`,
		"fallback": "iconoven:well-sharp",
	});
}

export default Component;

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
		"content": `<style>.i_1avpb4l {
  d: path("M12 2.75c4.5 0 7.25 3 7.25 7.5v4.5c0 4-3.25 6.5-7.25 6.5s-7.25-2.5-7.25-6.5v-4.5c0-4.5 2.75-7.5 7.25-7.5Z");
}

.w3ywc-bnn {
  d: path("M7.75 8.5h8.5v4h-8.5zM9.5 17h5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i_1avpb4l"/><path class="w3ywc-bnn"/></g>`,
		"fallback": "iconoven:welding-mask-sharp",
	});
}

export default Component;

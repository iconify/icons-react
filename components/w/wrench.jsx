import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x_4kk3byt {
  fill: var(--svg-color--94989b, #94989b);
  d: path("m47.4 47.4l7.5-2l8.8 8.8c1-4.2-.1-8.9-3.4-12.2s-7.9-4.4-12.2-3.4L25.4 16c1-4.2-.1-8.9-3.4-12.2S14.1-.6 9.8.4l8.8 8.8l-2 7.5l-7.5 2L.4 9.8c-1 4.2.1 8.9 3.4 12.2s7.9 4.4 12.2 3.4L38.6 48c-1 4.2.1 8.9 3.4 12.2s7.9 4.4 12.2 3.4l-8.8-8.8z");
}
</style><path class="x_4kk3byt"/>`,
		"fallback": "emojione:wrench",
	});
}

export default Component;

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
		"content": `<style>.qeg2d4bfl {
  fill: currentColor;
  d: path("M9.5 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M5.75 2a.75.75 0 0 0-.75.75v18.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75zM9.5 20.5v-8.75a.75.75 0 0 0-1.5 0v8.75H6.5v-17h11v17z");
}
</style><path class="qeg2d4bfl"/>`,
		"fallback": "fluent:xbox-console-24-regular",
	});
}

export default Component;

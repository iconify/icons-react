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
		"content": `<style>.rt0hg4bmb {
  fill: currentColor;
  d: path("M10.94 18.561a1.5 1.5 0 1 0 2.121-2.122a1.5 1.5 0 0 0-2.122 2.122");
}
</style><path class="rt0hg4bmb"/>`,
		"fallback": "fluent:wifi-4-24-regular",
	});
}

export default Component;

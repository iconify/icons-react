import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wvwr8jupi {
  fill: currentColor;
  d: path("M10.922 13.881a1.242 1.242 0 1 1-1.757 1.757a1.242 1.242 0 0 1 1.757-1.757");
}
</style><path class="wvwr8jupi"/>`,
		"fallback": "fluent:wifi-4-20-filled",
	});
}

export default Component;

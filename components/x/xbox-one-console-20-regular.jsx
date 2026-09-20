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
		"content": `<style>.mlcyzob2t {
  fill: currentColor;
  d: path("M17 6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM5 13h12v-1H5zm-2-2h14V7H3zm12.25-3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="mlcyzob2t"/>`,
		"fallback": "fluent:xbox-one-console-20-regular",
	});
}

export default Component;

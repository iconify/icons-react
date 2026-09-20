import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gwvsdd0eg {
  fill: currentColor;
  d: path("M8.5 6a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm-2-5a5.5 5.5 0 0 1 4.227 9.02l3.127 3.127a.5.5 0 1 1-.707.707l-3.127-3.127A5.5 5.5 0 1 1 6.5 1m0 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9");
}
</style><path class="gwvsdd0eg"/>`,
		"fallback": "fluent:zoom-out-16-regular",
	});
}

export default Component;

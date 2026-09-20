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
		"content": `<style>.a7giyacqh {
  fill: currentColor;
  d: path("M6.5 1a5.5 5.5 0 0 1 4.227 9.02l3.127 3.127a.5.5 0 1 1-.707.707l-3.127-3.127A5.5 5.5 0 1 1 6.5 1m0 3a.5.5 0 0 0-.5.5V6H4.5a.5.5 0 0 0 0 1H6v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H7V4.5a.5.5 0 0 0-.5-.5");
}
</style><path class="a7giyacqh"/>`,
		"fallback": "fluent:zoom-in-16-filled",
	});
}

export default Component;

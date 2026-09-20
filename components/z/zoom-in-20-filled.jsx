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
		"content": `<style>.nnmi2wbur {
  fill: currentColor;
  d: path("M8.5 2a6.5 6.5 0 0 1 4.937 10.73l3.417 3.416a.5.5 0 0 1-.638.765l-.07-.058l-3.417-3.417A6.5 6.5 0 1 1 8.5 2m0 3.5A.5.5 0 0 0 8 6v2H6a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V9h2a.5.5 0 0 0 0-1H9V6a.5.5 0 0 0-.5-.5");
}
</style><path class="nnmi2wbur"/>`,
		"fallback": "fluent:zoom-in-20-filled",
	});
}

export default Component;

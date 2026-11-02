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
		"content": `<style>.fmnzmsbfw {
  fill: currentColor;
  d: path("M12 18h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><path class="fmnzmsbfw"/>`,
		"fallback": "coolicons:wifi-none-fill-round",
	});
}

export default Component;

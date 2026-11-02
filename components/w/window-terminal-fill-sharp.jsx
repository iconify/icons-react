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
		"content": `<style>.npl6ucx8q {
  fill: currentColor;
  d: path("M2 20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m2-1h16V9H4Zm3.707-7.707l2 2a1 1 0 0 1 0 1.414l-2 2a.999.999 0 1 1-1.414-1.414L7.586 14l-1.293-1.293a.999.999 0 1 1 1.414-1.414M13 15h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><path class="npl6ucx8q"/>`,
		"fallback": "coolicons:window-terminal-fill-sharp",
	});
}

export default Component;

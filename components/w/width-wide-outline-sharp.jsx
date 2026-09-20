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
		"content": `<style>.vw45hdcdl {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h2V6H4zm4 0h8V6H8zm10 0h2V6h-2zM8 6v12z");
}
</style><path class="vw45hdcdl"/>`,
		"fallback": "material-symbols:width-wide-outline-sharp",
	});
}

export default Component;

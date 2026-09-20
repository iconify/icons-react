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
		"content": `<style>.u2ju54d9g {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h2V6H4zm14 0h2V6h-2z");
}
</style><path class="u2ju54d9g"/>`,
		"fallback": "material-symbols:width-wide-sharp",
	});
}

export default Component;

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
		"content": `<style>.nzh7dfb0m {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h1V6H4zm15 0h1V6h-1z");
}
</style><path class="nzh7dfb0m"/>`,
		"fallback": "material-symbols:width-full-sharp",
	});
}

export default Component;

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
		"content": `<style>.o9u-49b7w {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zM10 6v12z");
}
</style><path class="o9u-49b7w"/>`,
		"fallback": "material-symbols:width-normal-outline-sharp",
	});
}

export default Component;

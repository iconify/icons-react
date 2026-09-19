import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m6-lu3s9q {
  fill: currentColor;
  d: path("M50 14v36H14V14zm2-2H12v40h40z");
}
</style><path class="m6-lu3s9q"/>`,
		"fallback": "emojione-monotone:white-medium-small-square",
	});
}

export default Component;

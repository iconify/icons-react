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
		"content": `<style>.btc8qxb5q {
  fill: currentColor;
  d: path("m9 19l-7-7l7-7l1.4 1.4L5.825 11H22v2H5.825l4.6 4.6z");
}
</style><path class="btc8qxb5q"/>`,
		"fallback": "material-symbols:west-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mxj_-pb5e {
  fill: currentColor;
  d: path("M140 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m92 48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-92 48a12 12 0 1 0-12 12a12 12 0 0 0 12-12m32-92a44.05 44.05 0 0 0-44-44a88 88 0 0 0-46.91 162.42A52 52 0 0 1 128 128a44.05 44.05 0 0 0 44-44");
}
</style><path class="mxj_-pb5e"/>`,
		"fallback": "ph:yin-yang-fill",
	});
}

export default Component;

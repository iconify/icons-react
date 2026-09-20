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
		"content": `<style>.kcyidqamm {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M38 128a90.1 90.1 0 0 1 90-90a42 42 0 0 1 0 84a54 54 0 0 0-44.88 84A90.06 90.06 0 0 1 38 128m90 90a42 42 0 0 1 0-84a54 54 0 0 0 44.88-84A90 90 0 0 1 128 218m10-42a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-20-96a10 10 0 1 1 10 10a10 10 0 0 1-10-10");
}
</style><path class="kcyidqamm"/>`,
		"fallback": "ph:yin-yang-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.abb3ph3ue {
  fill: none;
  stroke: currentColor;
  stroke-dashoffset: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.234 24.643V42.49m0-36.981v5.76m29.532 18.359v12.863m0-36.982v10.815M24 35.267v7.224m0-36.982V22.17m-9.732-4.214a5.033 4.998 0 0 1-5.034 4.998a5.033 4.998 0 0 1-5.033-4.998a5.033 4.998 0 0 1 5.033-4.999a5.033 4.998 0 0 1 5.034 4.999M29.033 28.72A5.033 4.998 0 0 1 24 33.716a5.033 4.998 0 0 1-5.033-4.998A5.033 4.998 0 0 1 24 23.721a5.033 4.998 0 0 1 5.033 4.998m14.766-5.743a5.033 4.998 0 0 1-5.033 4.998a5.033 4.998 0 0 1-5.034-4.998a5.033 4.998 0 0 1 5.034-4.998a5.033 4.998 0 0 1 5.033 4.998");
}
</style><path class="abb3ph3ue"/>`,
		"fallback": "arcticons:xeq",
	});
}

export default Component;

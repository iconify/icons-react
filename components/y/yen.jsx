import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d0sb3yd4l {
  d: path("M10.707 8.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414");
}

.e0n6lxb8k {
  d: path("M10 9a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.od3e43qsh {
  d: path("M4 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 3.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1");
}

.vvcniacpk {
  d: path("M9.293 8.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="d0sb3yd4l"/><path class="vvcniacpk"/><path class="od3e43qsh"/><path class="e0n6lxb8k"/></g>`,
		"fallback": "pepicons-pop:yen",
	});
}

export default Component;

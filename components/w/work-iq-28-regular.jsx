import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tdevavjpk {
  fill: currentColor;
  d: path("M14 3c6.627 0 12 5.373 12 12a7.5 7.5 0 0 1-4.5 6.873v.627a3 3 0 0 0 3 3h.75a.75.75 0 0 1 0 1.5h-.75a4.5 4.5 0 0 1-4.5-4.5v-.15q-.728.148-1.5.15H17a4.5 4.5 0 1 1 4.5-4.5v2.195a6 6 0 0 0 3-5.195c0-5.799-4.701-10.5-10.5-10.5S3.5 9.201 3.5 15v.75a3.75 3.75 0 0 0 3.75 3.75H9.5a.75.75 0 0 1 0 1.5H7.25A5.25 5.25 0 0 1 2 15.75V15C2 8.373 7.373 3 14 3m3 12a3 3 0 1 0 0 6h1.5q.779-.002 1.5-.19V18a3 3 0 0 0-3-3");
}
</style><path class="tdevavjpk"/>`,
		"fallback": "fluent:work-iq-28-regular",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-k5ywbsm.css';
import '../../css/a/a1j4qjn6o.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-k5ywbsm"/><path class="a1j4qjn6o"/>`,
		"fallback": "flag:xx-4x3",
	});
}

export default Component;

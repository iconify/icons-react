import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8xdcxd-z.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8xdcxd-z"/>`,
		"fallback": "fa:wrench",
	});
}

export default Component;

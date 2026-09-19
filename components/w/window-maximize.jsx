import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xopn4tb3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xopn4tb3h"/>`,
		"fallback": "fa6-solid:window-maximize",
	});
}

export default Component;

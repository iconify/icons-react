import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd7i3ibcm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd7i3ibcm"/>`,
		"fallback": "fa-solid:window-close",
	});
}

export default Component;

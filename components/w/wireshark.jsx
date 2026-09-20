import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4b7g0lxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4b7g0lxm"/>`,
		"fallback": "thesvg:wireshark",
	});
}

export default Component;

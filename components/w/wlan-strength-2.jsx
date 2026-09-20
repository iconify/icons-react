import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikpks56ft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikpks56ft"/>`,
		"fallback": "ix:wlan-strength-2",
	});
}

export default Component;

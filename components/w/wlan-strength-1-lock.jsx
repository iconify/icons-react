import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/razlacc1s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="razlacc1s"/>`,
		"fallback": "ix:wlan-strength-1-lock",
	});
}

export default Component;

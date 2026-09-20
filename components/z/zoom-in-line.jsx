import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs6krb0lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs6krb0lt"/>`,
		"fallback": "si:zoom-in-line",
	});
}

export default Component;

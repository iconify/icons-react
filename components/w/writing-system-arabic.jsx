import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiu31ywbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiu31ywbk"/>`,
		"fallback": "mdi:writing-system-arabic",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eafz5sbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eafz5sbsn"/>`,
		"fallback": "mdi:wifi-strength-1-lock-open",
	});
}

export default Component;

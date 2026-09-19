import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh93kyo3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh93kyo3v"/>`,
		"fallback": "cbi:world-scout",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcgrw9bnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcgrw9bnd"/>`,
		"fallback": "ix:wlan-strength-3",
	});
}

export default Component;

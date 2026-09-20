import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgbx9bfba.css';
import '../../css/l/l1tfhcbvb.css';
import '../../css/f/f6kx-ccba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgbx9bfba"/><path class="l1tfhcbvb"/><path class="f6kx-ccba"/>`,
		"fallback": "token:you",
	});
}

export default Component;

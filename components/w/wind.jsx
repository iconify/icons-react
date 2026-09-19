import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgh8pwb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgh8pwb1j"/>`,
		"fallback": "hugeicons:wind",
	});
}

export default Component;

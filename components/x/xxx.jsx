import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/why_b6bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="why_b6bde"/>`,
		"fallback": "andrsrxn:xxx",
	});
}

export default Component;

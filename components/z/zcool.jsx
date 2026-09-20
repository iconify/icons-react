import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q54_4lbkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q54_4lbkd"/>`,
		"fallback": "thesvg:zcool",
	});
}

export default Component;

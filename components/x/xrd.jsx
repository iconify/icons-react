import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc2fn6mkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc2fn6mkd"/>`,
		"fallback": "token:xrd",
	});
}

export default Component;

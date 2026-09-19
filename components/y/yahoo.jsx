import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwtv1pcoo.css';

const viewBox = {"width":19,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwtv1pcoo"/>`,
		"fallback": "fontisto:yahoo",
	});
}

export default Component;

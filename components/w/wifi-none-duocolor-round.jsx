import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eivnb-q9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eivnb-q9n"/>`,
		"fallback": "coolicons:wifi-none-duocolor-round",
	});
}

export default Component;

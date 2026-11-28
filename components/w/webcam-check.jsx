import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t440isbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t440isbzh"/>`,
		"fallback": "noviair-light:webcam-check",
	});
}

export default Component;

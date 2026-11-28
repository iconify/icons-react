import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdt7c6b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdt7c6b1y"/>`,
		"fallback": "noviair:webcam-check",
	});
}

export default Component;

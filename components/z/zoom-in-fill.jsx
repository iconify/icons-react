import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx7s3ezkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx7s3ezkl"/>`,
		"fallback": "mingcute:zoom-in-fill",
	});
}

export default Component;

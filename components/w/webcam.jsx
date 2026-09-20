import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugoz1lb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugoz1lb8l"/>`,
		"fallback": "uil:webcam",
	});
}

export default Component;

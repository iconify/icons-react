import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7e0480cv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7e0480cv"/>`,
		"fallback": "streamline-color:zodiac-4",
	});
}

export default Component;

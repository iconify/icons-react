import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yccvg5xel.css';

const viewBox = {"width":1120,"height":2208};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yccvg5xel"/>`,
		"fallback": "vs:wine-o",
	});
}

export default Component;

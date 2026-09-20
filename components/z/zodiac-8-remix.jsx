import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3bvpxb9k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j3bvpxb9k"/>`,
		"fallback": "streamline:zodiac-8-remix",
	});
}

export default Component;

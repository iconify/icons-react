import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr0n7--kt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr0n7--kt"/>`,
		"fallback": "streamline:zodiac-12",
	});
}

export default Component;

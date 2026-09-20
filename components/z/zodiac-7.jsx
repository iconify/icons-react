import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1s7id3hp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1s7id3hp"/>`,
		"fallback": "streamline-color:zodiac-7",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skr262bwt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="skr262bwt"/>`,
		"fallback": "streamline:zodiac-7-remix",
	});
}

export default Component;

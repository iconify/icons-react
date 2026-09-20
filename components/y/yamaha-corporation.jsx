import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-msx3-8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-msx3-8l"/>`,
		"fallback": "thesvg-color:yamaha-corporation",
	});
}

export default Component;

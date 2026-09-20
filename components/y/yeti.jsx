import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrtg7zr2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrtg7zr2s"/>`,
		"fallback": "thesvg-color:yeti",
	});
}

export default Component;

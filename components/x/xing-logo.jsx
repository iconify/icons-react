import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmyu2ouwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmyu2ouwi"/>`,
		"fallback": "streamline-logos:xing-logo",
	});
}

export default Component;

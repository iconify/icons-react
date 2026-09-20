import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wohh92bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wohh92bfg"/>`,
		"fallback": "mdi:zoom-out",
	});
}

export default Component;

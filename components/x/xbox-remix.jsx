import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wswvxk1sa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wswvxk1sa"/>`,
		"fallback": "streamline:xbox-remix",
	});
}

export default Component;

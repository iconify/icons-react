import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdv-4ebbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdv-4ebbp"/>`,
		"fallback": "token:yak",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ili7pu_wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ili7pu_wf"/>`,
		"fallback": "thesvg-color:wp-rocket",
	});
}

export default Component;

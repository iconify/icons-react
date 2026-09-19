import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eszsa-r-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eszsa-r-s"/>`,
		"fallback": "iconoir:wolf",
	});
}

export default Component;

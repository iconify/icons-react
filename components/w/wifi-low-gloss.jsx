import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udfo3xbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udfo3xbfj"/>`,
		"fallback": "withicons:wifi-low-gloss",
	});
}

export default Component;

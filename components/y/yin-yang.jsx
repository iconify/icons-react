import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haowsubbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haowsubbb"/>`,
		"fallback": "mdi:yin-yang",
	});
}

export default Component;

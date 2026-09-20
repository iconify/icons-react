import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab6o8pbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab6o8pbyt"/>`,
		"fallback": "mdi:xing",
	});
}

export default Component;

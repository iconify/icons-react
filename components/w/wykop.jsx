import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk50x0bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk50x0bad"/>`,
		"fallback": "simple-icons:wykop",
	});
}

export default Component;

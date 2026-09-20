import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-obghb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-obghb6z"/>`,
		"fallback": "ri:windows-line",
	});
}

export default Component;

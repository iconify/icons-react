import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0y_56bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0y_56bux"/>`,
		"fallback": "mynaui:wine-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acbbs51uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acbbs51uh"/>`,
		"fallback": "mynaui:x-square",
	});
}

export default Component;

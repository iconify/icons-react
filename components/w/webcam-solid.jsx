import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-d7b5o7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-d7b5o7e"/>`,
		"fallback": "mynaui:webcam-solid",
	});
}

export default Component;

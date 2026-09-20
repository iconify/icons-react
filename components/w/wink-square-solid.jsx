import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez5o3y60g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez5o3y60g"/>`,
		"fallback": "mynaui:wink-square-solid",
	});
}

export default Component;

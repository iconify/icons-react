import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru8hiep1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru8hiep1e"/>`,
		"fallback": "tabler:xd",
	});
}

export default Component;

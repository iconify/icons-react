import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc3bfcb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc3bfcb7a"/>`,
		"fallback": "mynaui:yen-hexagon",
	});
}

export default Component;

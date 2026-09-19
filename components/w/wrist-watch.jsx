import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3pqhgbsx.css';
import '../../css/o/obc0bdcuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3pqhgbsx"/><path class="obc0bdcuj"/>`,
		"fallback": "boxicons:wrist-watch",
	});
}

export default Component;

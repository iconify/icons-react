import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds1i_q67m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds1i_q67m"/>`,
		"fallback": "game-icons:worried-eyes",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxsj9xn3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxsj9xn3u"/>`,
		"fallback": "boxicons:wink-smile-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxtrmxb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxtrmxb5c"/>`,
		"fallback": "fontisto:whatsapp",
	});
}

export default Component;

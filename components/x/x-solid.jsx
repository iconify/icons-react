import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbr2rikas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbr2rikas"/>`,
		"fallback": "pixelarticons:x-solid",
	});
}

export default Component;

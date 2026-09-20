import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuo_d6bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuo_d6bzz"/>`,
		"fallback": "thesvg:zhipu",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckny4dw-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckny4dw-j"/>`,
		"fallback": "token:world",
	});
}

export default Component;

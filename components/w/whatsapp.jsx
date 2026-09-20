import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io6e_qbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io6e_qbnz"/>`,
		"fallback": "thesvg:whatsapp",
	});
}

export default Component;

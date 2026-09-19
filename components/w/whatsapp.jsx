import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti7oxnffl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ti7oxnffl"/>`,
		"fallback": "bxl:whatsapp",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl3fnxbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hl3fnxbbh"/>`,
		"fallback": "healthicons:wheelchair-alt-outline-24px",
	});
}

export default Component;

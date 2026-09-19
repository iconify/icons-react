import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox180vb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ox180vb0x"/>`,
		"fallback": "griddy-icons:xls-file",
	});
}

export default Component;

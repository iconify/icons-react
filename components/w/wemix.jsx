import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtbocxb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vtbocxb4x"/>`,
		"fallback": "token:wemix",
	});
}

export default Component;

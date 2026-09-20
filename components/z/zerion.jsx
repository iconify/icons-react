import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmpd8_b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wmpd8_b-s"/>`,
		"fallback": "token:zerion",
	});
}

export default Component;

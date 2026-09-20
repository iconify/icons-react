import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk7r16b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fk7r16b8a"/>`,
		"fallback": "token:xels",
	});
}

export default Component;

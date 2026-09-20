import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlkrr1bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hlkrr1bkr"/>`,
		"fallback": "si:zoom-out-fill",
	});
}

export default Component;

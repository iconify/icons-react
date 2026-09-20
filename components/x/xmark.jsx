import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxqeslb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxqeslb9q"/>`,
		"fallback": "nrk:xmark",
	});
}

export default Component;

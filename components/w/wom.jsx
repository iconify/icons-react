import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3k38cb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n3k38cb7n"/>`,
		"fallback": "token:wom",
	});
}

export default Component;

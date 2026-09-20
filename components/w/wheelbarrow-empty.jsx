import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5r2seb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c5r2seb2n"/>`,
		"fallback": "lineicons:wheelbarrow-empty",
	});
}

export default Component;

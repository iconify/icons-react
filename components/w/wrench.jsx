import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1np-_ozh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x1np-_ozh"/>`,
		"fallback": "pepicons-pencil:wrench",
	});
}

export default Component;

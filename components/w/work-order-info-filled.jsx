import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1t2gqb3z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1t2gqb3z"/>`,
		"fallback": "lsicon:work-order-info-filled",
	});
}

export default Component;

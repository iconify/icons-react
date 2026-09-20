import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5d9s8bzd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5d9s8bzd"/>`,
		"fallback": "pajamas:work-item-new",
	});
}

export default Component;

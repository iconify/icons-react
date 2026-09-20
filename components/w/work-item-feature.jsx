import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1pe9xbbf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1pe9xbbf"/>`,
		"fallback": "pajamas:work-item-feature",
	});
}

export default Component;

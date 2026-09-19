import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j62jmlv1c.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j62jmlv1c"/>`,
		"fallback": "fa:window-maximize",
	});
}

export default Component;

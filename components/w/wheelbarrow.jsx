import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9qzhvb_e.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9qzhvb_e"/>`,
		"fallback": "lineicons:wheelbarrow",
	});
}

export default Component;

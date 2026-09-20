import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxmqw_b4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxmqw_b4k"/>`,
		"fallback": "pajamas:work-items",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh-9m4blo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh-9m4blo"/>`,
		"fallback": "pajamas:work-item-ticket",
	});
}

export default Component;

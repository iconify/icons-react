import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-h28mb2l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-h28mb2l"/>`,
		"fallback": "raphael:wrench3",
	});
}

export default Component;

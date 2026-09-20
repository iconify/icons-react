import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9z8k-zja.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9z8k-zja"/>`,
		"fallback": "maki:wheelchair-11",
	});
}

export default Component;

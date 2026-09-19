import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii_1hrz-r.css';

const viewBox = {"width":986,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii_1hrz-r"/>`,
		"fallback": "brandico:win8",
	});
}

export default Component;

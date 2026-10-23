import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7hj7zvcx.css';
import '../../css/s/s6xd6zbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t7hj7zvcx"/><path class="s6xd6zbje"/></g>`,
		"fallback": "andrsrxn:whisk",
	});
}

export default Component;

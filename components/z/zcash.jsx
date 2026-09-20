import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6qb6tbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6qb6tbll"/>`,
		"fallback": "thesvg:zcash",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg168wb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg168wb2v"/>`,
		"fallback": "typcn:wine",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of4gs732s.css';
import '../../css/c/caxag_z2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of4gs732s"/><path class="caxag_z2e"/>`,
		"fallback": "token:xor",
	});
}

export default Component;

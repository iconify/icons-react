import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blkq5y2_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blkq5y2_d"/>`,
		"fallback": "selfhst:writefreely-dark",
	});
}

export default Component;

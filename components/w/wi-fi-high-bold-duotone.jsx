import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/ndvam-0ub.css';
import '../../css/m/m_yt74b1y.css';
import '../../css/w/wcswsybcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ndvam-0ub"/><path class="m_yt74b1y"/></g><path class="wcswsybcz"/></g>`,
		"fallback": "solar:wi-fi-high-bold-duotone",
	});
}

export default Component;

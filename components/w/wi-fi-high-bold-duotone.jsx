import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/ndvam-0ub.css';
import '../../css/m/m_yt74b1y.css';
import '../../css/t/tfsq0xb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="ndvam-0ub"/><path class="m_yt74b1y"/></g><path class="tfsq0xb1f"/>`,
		"fallback": "solar:wi-fi-high-bold-duotone",
	});
}

export default Component;

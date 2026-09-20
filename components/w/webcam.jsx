import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqm_ipb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqm_ipb1a"/>`,
		"fallback": "mi:webcam",
	});
}

export default Component;

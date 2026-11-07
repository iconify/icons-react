import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wyf-9gbfh.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/j/jc2hwtrrg.css';
import '../../css/w/wvqgt30sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wyf-9gbfh"/><path class="hwifnpb2v"/><path class="jc2hwtrrg"/><path class="wvqgt30sr"/></g>`,
		"fallback": "solar:weigher-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bet-qjsfp.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/w/woqg6bste.css';
import '../../css/y/yhc08k3ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bet-qjsfp"/><path class="hwifnpb2v"/><path class="woqg6bste"/><path class="yhc08k3ha"/></g>`,
		"fallback": "solar:weigher-linear",
	});
}

export default Component;

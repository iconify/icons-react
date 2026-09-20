import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dt_kzxb6g.css';
import '../../css/f/focqhos4p.css';
import '../../css/g/g1pa1nbfl.css';
import '../../css/z/zj2p4py0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dt_kzxb6g"/><path class="focqhos4p"/><path class="g1pa1nbfl"/><path class="zj2p4py0y"/></g>`,
		"fallback": "solar:wi-fi-line-duotone",
	});
}

export default Component;

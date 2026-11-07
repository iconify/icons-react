import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ca_j8nbqu.css';
import '../../css/q/qp_liusnp.css';
import '../../css/x/xw09-ubbu.css';
import '../../css/c/cviyaybdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ca_j8nbqu"/><path class="qp_liusnp"/><path class="xw09-ubbu"/><path class="cviyaybdx"/></g>`,
		"fallback": "solar:widget-6-line-duotone",
	});
}

export default Component;

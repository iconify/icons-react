import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wt73-cb1v.css';
import '../../css/y/y4rd-qbsi.css';
import '../../css/q/qyrtl7b4j.css';
import '../../css/f/fnd83gbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wt73-cb1v"/><path class="y4rd-qbsi"/><path class="qyrtl7b4j"/><path class="fnd83gbcy"/></g>`,
		"fallback": "matita:wifi",
	});
}

export default Component;

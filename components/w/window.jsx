import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2o-8kr3y.css';
import '../../css/q/qx05z4bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2o-8kr3y"/><path class="qx05z4bvk"/>`,
		"fallback": "boxicons:window",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow9_qhf_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow9_qhf_s"/>`,
		"fallback": "fa-solid:weight-hanging",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7qlfbcri.css';
import '../../css/q/qcjn5ubrr.css';
import '../../css/g/g_l_olm7n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7qlfbcri"/><path class="qcjn5ubrr"/><path clip-rule="evenodd" class="g_l_olm7n"/>`,
		"fallback": "lsicon:work-order-appointment-filled",
	});
}

export default Component;

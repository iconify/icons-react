import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd6if1b-n.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd6if1b-n"/>`,
		"fallback": "tdesign:wifi-1-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktrn7m7cc.css';

const viewBox = {"width":73,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktrn7m7cc"/>`,
		"fallback": "garden:wordmark-garden-26",
	});
}

export default Component;

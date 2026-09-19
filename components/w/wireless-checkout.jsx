import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0-6anw0t.css';
import '../../css/j/jr1xz7b-w.css';
import '../../css/l/l2k-wqsww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0-6anw0t"/><path class="jr1xz7b-w"/><path class="l2k-wqsww"/>`,
		"fallback": "carbon:wireless-checkout",
	});
}

export default Component;

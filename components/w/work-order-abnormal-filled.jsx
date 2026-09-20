import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4sc0yb1a.css';
import '../../css/q/qcjn5ubrr.css';
import '../../css/a/avgingbgv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4sc0yb1a"/><path class="qcjn5ubrr"/><path clip-rule="evenodd" class="avgingbgv"/>`,
		"fallback": "lsicon:work-order-abnormal-filled",
	});
}

export default Component;

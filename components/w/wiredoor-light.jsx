import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9qoumbuq.css';
import '../../css/q/qkol7euix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9qoumbuq"/><path class="qkol7euix"/>`,
		"fallback": "selfhst:wiredoor-light",
	});
}

export default Component;

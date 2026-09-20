import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qugdhub4y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qugdhub4y"/>`,
		"fallback": "picon:window",
	});
}

export default Component;

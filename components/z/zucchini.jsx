import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypjkvm3ce.css';
import '../../css/x/xqp8-jfte.css';
import '../../css/k/knuz5npah.css';
import '../../css/q/qj7w784px.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="ypjkvm3ce"/><path class="xqp8-jfte"/><path class="knuz5npah"/><path class="qj7w784px"/></g>`,
		"fallback": "iconito:zucchini",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3_17eb5m.css';
import '../../css/n/nknwp425q.css';
import '../../css/b/bzswhqb2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3_17eb5m"/><path class="nknwp425q"/><path class="bzswhqb2n"/>`,
		"fallback": "carbon:winter-warning",
	});
}

export default Component;

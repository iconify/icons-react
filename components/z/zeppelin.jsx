import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nx-ik2vqn.css';
import '../../css/v/v4v2fd20w.css';
import '../../css/z/zs6dehbct.css';
import '../../css/j/j2oc--1ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nx-ik2vqn"/><path class="v4v2fd20w"/><path class="zs6dehbct"/><path class="j2oc--1ks"/></g>`,
		"fallback": "hugeicons:zeppelin",
	});
}

export default Component;

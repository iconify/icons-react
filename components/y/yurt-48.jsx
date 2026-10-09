import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmdh2rbtc.css';
import '../../css/e/eo-i-43lt.css';
import '../../css/u/ufuoplbno.css';
import '../../css/c/c_pwfbcxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmdh2rbtc"/><path class="eo-i-43lt"/><path class="ufuoplbno"/><path class="c_pwfbcxb"/>`,
		"fallback": "energy-icons:yurt-48",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/krzai0yuc.css';
import '../../css/d/dt6q0ubvw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="krzai0yuc"/><path class="dt6q0ubvw"/></g>`,
		"fallback": "marketeq:zig-zag-left-right-arrow",
	});
}

export default Component;

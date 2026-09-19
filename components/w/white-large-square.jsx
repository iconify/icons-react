import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/junlcg-0j.css';
import '../../css/x/xdm1hw_ei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="junlcg-0j"/><path class="xdm1hw_ei"/></g>`,
		"fallback": "fluent-emoji-flat:white-large-square",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pl-9h2bse.css';
import '../../css/x/xtnr31bzt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pl-9h2bse"/><path class="xtnr31bzt"/></g>`,
		"fallback": "fluent-emoji-flat:white-medium-small-square",
	});
}

export default Component;

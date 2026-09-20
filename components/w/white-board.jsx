import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouoq8vsjl.css';
import '../../css/x/xd1kvz6_i.css';
import '../../css/h/hl38zzbtw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouoq8vsjl"/><path class="xd1kvz6_i"/><path class="hl38zzbtw"/></g>`,
		"fallback": "streamline-flex-color:white-board",
	});
}

export default Component;

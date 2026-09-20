import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5780hbgv.css';
import '../../css/f/f4pj4yscw.css';
import '../../css/p/pn97bjbvj.css';
import '../../css/q/qq83sseke.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i5780hbgv"/><path clip-rule="evenodd" class="f4pj4yscw"/><path class="pn97bjbvj"/><path class="qq83sseke"/></g>`,
		"fallback": "streamline-color:yin-yang-symbol-flat",
	});
}

export default Component;

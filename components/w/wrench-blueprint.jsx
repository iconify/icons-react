import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z12vwrbxv.css';
import '../../css/q/qtv_cddoq.css';
import '../../css/y/yrrgw6qvv.css';
import '../../css/h/hi4mwm5qt.css';
import '../../css/h/hup0fn6ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z12vwrbxv"/><path class="qtv_cddoq wm-deco"/><path class="wm-deco yrrgw6qvv"/><path class="hi4mwm5qt"/><path class="hup0fn6ni"/></g>`,
		"fallback": "withicons:wrench-blueprint",
	});
}

export default Component;

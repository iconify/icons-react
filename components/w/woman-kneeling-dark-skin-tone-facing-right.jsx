import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_raf5bng.css';
import '../../css/p/pxvt114hy.css';
import '../../css/c/c8046fbzv.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/iem6_ei8g.css';
import '../../css/f/f4h9sgbbv.css';
import '../../css/w/w65b53brl.css';
import '../../css/t/tp_fuac2z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(-1 0 0 1 72 0)" class="e_raf5bng"><circle class="pxvt114hy"/><path class="c8046fbzv"/></g><g class="brzn_0bpr"><g transform="matrix(-1 0 0 1 72 0)"><circle class="iem6_ei8g"/><path class="f4h9sgbbv"/><path class="w65b53brl"/></g><path class="tp_fuac2z"/></g>`,
		"fallback": "openmoji:woman-kneeling-dark-skin-tone-facing-right",
	});
}

export default Component;

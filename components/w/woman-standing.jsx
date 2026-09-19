import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dn_90mbaw.css';
import '../../css/j/jh1halfsl.css';
import '../../css/l/l1r96vb_l.css';
import '../../css/v/v0yf2_89p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dn_90mbaw"/><path class="jh1halfsl"/><path class="l1r96vb_l"/><path class="v0yf2_89p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-standing",
	});
}

export default Component;

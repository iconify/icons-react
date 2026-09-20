import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2rld1b5y.css';
import '../../css/p/pv2v38bzw.css';
import '../../css/l/l0k0tg8io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x2rld1b5y"/><path class="pv2v38bzw"/><path class="l0k0tg8io"/></g>`,
		"fallback": "tdesign:work-history",
	});
}

export default Component;

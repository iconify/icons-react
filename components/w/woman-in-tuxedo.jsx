import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_n1dze3o.css';
import '../../css/o/of9isbc_m.css';
import '../../css/t/tlq57j7uz.css';
import '../../css/h/hc1l-354e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n_n1dze3o"/><path class="of9isbc_m"/><path class="tlq57j7uz"/><path class="hc1l-354e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-in-tuxedo",
	});
}

export default Component;

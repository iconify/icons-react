import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/axxphcgys.css';
import '../../css/m/ma-1r2bqx.css';
import '../../css/e/evxn836au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="axxphcgys"/><path class="ma-1r2bqx"/><path class="evxn836au"/></g>`,
		"fallback": "hugeicons:whisk",
	});
}

export default Component;

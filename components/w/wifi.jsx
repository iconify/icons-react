import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w--_r6b_t.css';
import '../../css/g/gq0l-nfit.css';
import '../../css/h/hmy4ymk6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w--_r6b_t"/><path class="gq0l-nfit"/><path clip-rule="evenodd" class="hmy4ymk6a"/></g>`,
		"fallback": "icon-park-outline:wifi",
	});
}

export default Component;

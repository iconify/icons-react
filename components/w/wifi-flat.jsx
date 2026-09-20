import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxi2rbnm.css';
import '../../css/a/acxi8tb9t.css';
import '../../css/n/n0bn3ccoq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wnxi2rbnm"><path class="acxi8tb9t"/><path class="n0bn3ccoq"/></g>`,
		"fallback": "streamline-plump-color:wifi-flat",
	});
}

export default Component;

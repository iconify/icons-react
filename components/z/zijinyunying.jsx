import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p5rsn9lsf.css';
import '../../css/g/gtioo54ca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="p5rsn9lsf"/><path class="gtioo54ca"/></g>`,
		"fallback": "icon-park:zijinyunying",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss6umgmez.css';
import '../../css/x/xelml5b_j.css';
import '../../css/u/u51rzi9rf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss6umgmez"/><path class="xelml5b_j"/><path class="u51rzi9rf"/>`,
		"fallback": "famicons:wifi-outline",
	});
}

export default Component;

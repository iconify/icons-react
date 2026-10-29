import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nxrh6pc1r.css';
import '../../css/j/j3czu2bly.css';
import '../../css/r/rxzr1qb1y.css';
import '../../css/f/fwu-keboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nxrh6pc1r"/><path class="j3czu2bly wm-k"/><path class="rxzr1qb1y wm-k"/><path class="fwu-keboc wm-a"/></g>`,
		"fallback": "withicons:wine-sketch",
	});
}

export default Component;

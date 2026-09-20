import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m7gtjxb0c.css';
import '../../css/q/q_h-iab4v.css';
import '../../css/q/q46bol_7h.css';
import '../../css/y/yjvmd2b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m7gtjxb0c"/><path class="q_h-iab4v"/><path class="q46bol_7h"/><path class="yjvmd2b2h"/></g>`,
		"fallback": "streamline-ultimate:zip-file-check",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8-77cbpa.css';
import '../../css/h/huuajhmrh.css';
import '../../css/n/nqkcrrb7x.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8-77cbpa"/><circle class="huuajhmrh"/><path class="nqkcrrb7x"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:worried-face",
	});
}

export default Component;

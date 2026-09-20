import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyepd0buq.css';
import '../../css/u/ujont2mwh.css';
import '../../css/p/ptnzl-b1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyepd0buq"/><path class="ujont2mwh"/><path class="ptnzl-b1k"/>`,
		"fallback": "selfhst:windows-terminal-dark",
	});
}

export default Component;

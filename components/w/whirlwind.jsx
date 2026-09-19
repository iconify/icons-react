import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fzkyp8b7q.css';
import '../../css/t/t4o_z7khl.css';
import '../../css/r/ryuc04bif.css';
import '../../css/p/p2yu4yz6p.css';
import '../../css/q/q1juiplek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fzkyp8b7q"/><path class="t4o_z7khl"/><path class="ryuc04bif"/><path class="p2yu4yz6p"/><path class="q1juiplek"/></g>`,
		"fallback": "icon-park-solid:whirlwind",
	});
}

export default Component;

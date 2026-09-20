import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ufsvb2b6l.css';
import '../../css/d/dxes_dboi.css';
import '../../css/u/ulev993bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ufsvb2b6l"/><path class="dxes_dboi"/><path class="ulev993bw"/></g>`,
		"fallback": "streamline-ultimate:wifi-laptop-1",
	});
}

export default Component;

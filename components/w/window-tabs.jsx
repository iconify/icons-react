import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9kbmpviz.css';
import '../../css/s/soa_04_3y.css';
import '../../css/k/kpz_0rvrz.css';
import '../../css/w/wzhzezsph.css';
import '../../css/a/a7gs-69bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9kbmpviz"/><path class="soa_04_3y"/><path class="kpz_0rvrz"/><path class="wzhzezsph"/><path class="a7gs-69bk"/></g>`,
		"fallback": "streamline-cyber-color:window-tabs",
	});
}

export default Component;

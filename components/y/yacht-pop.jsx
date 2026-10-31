import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/t/two2dcbps.css';
import '../../css/f/fadns82xg.css';
import '../../css/e/e0gd90big.css';
import '../../css/k/kfl0b1bln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="two2dcbps"/><path class="fadns82xg"/><path class="e0gd90big"/><path class="kfl0b1bln"/></g>`,
		"fallback": "streamline-kameleon-color:yacht-pop",
	});
}

export default Component;

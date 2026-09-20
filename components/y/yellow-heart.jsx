import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wak1glb2p.css';
import '../../css/f/fq4_qkb3m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wak1glb2p"/><path class="fq4_qkb3m"/>`,
		"fallback": "openmoji:yellow-heart",
	});
}

export default Component;

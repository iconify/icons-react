import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvsk-v3li.css';
import '../../css/j/jegawebwo.css';
import '../../css/m/mcway_bxu.css';
import '../../css/p/psnj3mbqk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qvsk-v3li"/><circle class="jegawebwo"/><circle class="mcway_bxu"/><circle class="psnj3mbqk"/></g>`,
		"fallback": "fad:xlrplug",
	});
}

export default Component;

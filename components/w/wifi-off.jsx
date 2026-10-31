import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wv_alvx4e.css';
import '../../css/u/u6000hrnj.css';
import '../../css/o/omsuv_4dk.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wv_alvx4e"/><path class="u6000hrnj"/><path class="omsuv_4dk wm-k"/><path class="qr4ochb5c wm-s"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wifi-off",
	});
}

export default Component;

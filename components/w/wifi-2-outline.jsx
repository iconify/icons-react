import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu4d95sqp.css';
import '../../css/u/ux61w_-4n.css';
import '../../css/u/ufi06l-_c.css';
import '../../css/n/nppvs1boa.css';
import '../../css/q/q97kenb3x.css';
import '../../css/r/rn27l3b6z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cu4d95sqp"/><path class="ux61w_-4n"/><path clip-rule="evenodd" class="ufi06l-_c"/><path class="nppvs1boa"/><path class="q97kenb3x"/><path clip-rule="evenodd" class="rn27l3b6z"/></g>`,
		"fallback": "glyphs:wifi-2-outline",
	});
}

export default Component;

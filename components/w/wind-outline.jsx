import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vw1tldbhd.css';
import '../../css/s/sf5mdsb0e.css';
import '../../css/k/kgz32_haf.css';
import '../../css/r/rpew0wbce.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vw1tldbhd"/><path class="sf5mdsb0e"/><path class="kgz32_haf"/><path class="rpew0wbce"/></g>`,
		"fallback": "glyphs:wind-outline",
	});
}

export default Component;

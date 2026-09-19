import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0ijz3_eb.css';
import '../../css/v/vuo5f7smn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x0ijz3_eb"/><path class="vuo5f7smn"/></g>`,
		"fallback": "glyphs:windsock-duo",
	});
}

export default Component;

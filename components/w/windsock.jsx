import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttod6dbvm.css';
import '../../css/h/hi_ztfptr.css';
import '../../css/r/rnunjybvs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ttod6dbvm"/><path class="hi_ztfptr"/><path clip-rule="evenodd" class="rnunjybvs"/></g>`,
		"fallback": "glyphs-poly:windsock",
	});
}

export default Component;

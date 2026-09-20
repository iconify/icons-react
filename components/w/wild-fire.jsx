import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2vbsuemv.css';
import '../../css/n/nnu085bzb.css';
import '../../css/u/uk6npfitf.css';
import '../../css/z/z04drlb1l.css';
import '../../css/s/sxsjv-4ze.css';
import '../../css/j/jg_6dbc1b.css';
import '../../css/n/nnnxesq5z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2vbsuemv"/><path class="nnu085bzb"/><path class="uk6npfitf"/><g class="z04drlb1l"><path class="sxsjv-4ze"/><path class="jg_6dbc1b"/><path class="nnnxesq5z"/></g>`,
		"fallback": "openmoji:wild-fire",
	});
}

export default Component;

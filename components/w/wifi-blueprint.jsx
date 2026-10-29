import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fxlwt65ty.css';
import '../../css/y/y3nvvebgo.css';
import '../../css/w/wcas29b1h.css';
import '../../css/h/hjpmvwbth.css';
import '../../css/z/z05c70bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fxlwt65ty wm-deco"/><path class="wm-deco y3nvvebgo"/><path class="wcas29b1h wm-deco"/><path class="hjpmvwbth"/><path class="z05c70bso"/></g>`,
		"fallback": "withicons:wifi-blueprint",
	});
}

export default Component;

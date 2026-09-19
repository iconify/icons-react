import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f-4qndcoc.css';
import '../../css/p/p1tphubhz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f-4qndcoc"/><path class="p1tphubhz"/></g>`,
		"fallback": "glyphs-poly:wrench",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mayw08aqa.css';
import '../../css/y/yth9hpbfr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mayw08aqa"/><path class="yth9hpbfr"/></g>`,
		"fallback": "glyphs-poly:wifi-75",
	});
}

export default Component;

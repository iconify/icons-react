import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mayw08aqa.css';
import '../../css/f/f_5j4qo8n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mayw08aqa"/><path class="f_5j4qo8n"/></g>`,
		"fallback": "glyphs-poly:wifi-50",
	});
}

export default Component;

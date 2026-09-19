import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mayw08aqa.css';
import '../../css/e/e0skubl9u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mayw08aqa"/><path class="e0skubl9u"/></g>`,
		"fallback": "glyphs-poly:wifi-25",
	});
}

export default Component;

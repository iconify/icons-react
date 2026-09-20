import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ajqcms6oz.css';
import '../../css/t/tsfsykbbs.css';
import '../../css/r/rrf3ilijn.css';
import '../../css/o/oe-xab43p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ajqcms6oz"/><path class="tsfsykbbs"/><path class="rrf3ilijn"/><path class="oe-xab43p"/></g>`,
		"fallback": "solar:widget-3-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug3-7_wvo.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/f/f7ukukz0z.css';
import '../../css/j/j2bhdfb5h.css';
import '../../css/t/trm-r7bnn.css';
import '../../css/t/tevcb5icz.css';
import '../../css/j/jiial9gjh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug3-7_wvo"/><g class="rpvb-o6bq"><path class="f7ukukz0z"/><path clip-rule="evenodd" class="j2bhdfb5h"/><g clip-rule="evenodd" class="trm-r7bnn"><path transform="matrix(2.138 0 0 2.239 43.22 50.051)" class="tevcb5icz"/><path transform="matrix(2.138 0 0 2.239 53.91 38.14)" class="jiial9gjh"/></g></g>`,
		"fallback": "openmoji:webassembly",
	});
}

export default Component;

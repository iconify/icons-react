import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krzsvb6dy.css';
import '../../css/q/qa4sd1tba.css';
import '../../css/p/pvl2anbys.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGJLYRnb5B)"><path class="krzsvb6dy"/><path class="qa4sd1tba"/></g><defs><clipPath id="SVGJLYRnb5B"><rect class="pvl2anbys"/></clipPath></defs></g>`,
		"fallback": "skill-icons:webassembly",
	});
}

export default Component;

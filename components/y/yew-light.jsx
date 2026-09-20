import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6m2w-bsk.css';
import '../../css/g/gwn35fbgx.css';
import '../../css/c/c8a4e_fzq.css';
import '../../css/d/drq7x3lfe.css';
import '../../css/j/j15ty4b9p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="n6m2w-bsk"/><path class="gwn35fbgx"/><path class="c8a4e_fzq"/><path class="drq7x3lfe"/></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath></defs></g>`,
		"fallback": "skill-icons:yew-light",
	});
}

export default Component;

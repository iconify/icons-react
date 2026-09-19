import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o0fxx-bib.css';
import '../../css/e/ex176x73p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o0fxx-bib"/><path class="ex176x73p"/></g>`,
		"fallback": "hugeicons:web-protection",
	});
}

export default Component;

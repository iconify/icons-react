import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/atvurub2h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="atvurub2h"/><line x1="4.25" x2="12.25" y1="1.75" y2="12.25"/></g>`,
		"fallback": "charm:wifi-slash",
	});
}

export default Component;

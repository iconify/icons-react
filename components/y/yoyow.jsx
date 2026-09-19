import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zelkmkbtz.css';
import '../../css/d/d-0wibcgd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zelkmkbtz"/><path class="d-0wibcgd"/></g>`,
		"fallback": "cryptocurrency-color:yoyow",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b105wdqzl.css';
import '../../css/n/nuoq-_b5c.css';
import '../../css/r/r5t06ob6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b105wdqzl"/><path class="nuoq-_b5c"/><path class="r5t06ob6v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-in-motorized-wheelchair",
	});
}

export default Component;

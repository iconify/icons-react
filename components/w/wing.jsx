import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7ywrlbnk.css';
import '../../css/p/p0jv7ib7i.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/t/tu2z8fb9g.css';
import '../../css/d/d4wez1bcs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7ywrlbnk"/><path class="p0jv7ib7i"/><g class="jn8qy4bru"><path class="tu2z8fb9g"/><path class="d4wez1bcs"/></g>`,
		"fallback": "openmoji:wing",
	});
}

export default Component;

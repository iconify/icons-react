import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/fwd9lac5d.css';
import '../../css/q/qo-4spsiy.css';
import '../../css/d/d1_-z3bdd.css';
import '../../css/c/c-cg5rb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="fwd9lac5d"/><path class="qo-4spsiy"/><path class="d1_-z3bdd"/><path class="c-cg5rb1w"/></g>`,
		"fallback": "streamline-sharp-color:zoom-document",
	});
}

export default Component;

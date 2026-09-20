import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7pevhgad.css';
import '../../css/l/lquzsqb6o.css';
import '../../css/b/b9esesbic.css';
import '../../css/w/w6-q7vl-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m7pevhgad"/><circle class="lquzsqb6o"/><circle class="b9esesbic"/><path class="w6-q7vl-y"/></g>`,
		"fallback": "lets-icons:wow-light",
	});
}

export default Component;

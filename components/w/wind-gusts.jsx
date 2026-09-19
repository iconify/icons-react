import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mht05k55h.css';
import '../../css/d/ds9m6_b0q.css';
import '../../css/f/fszk4qb6g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mht05k55h"/><path class="ds9m6_b0q"/><path class="fszk4qb6g"/>`,
		"fallback": "carbon:wind-gusts",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5et9lxjq.css';
import '../../css/i/i8m-zjguk.css';
import '../../css/i/irczjwbis.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/g/gx26emb1z.css';
import '../../css/z/zg9uhs63y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5et9lxjq"/><path class="i8m-zjguk"/><path class="irczjwbis"/><g class="jn8qy4bru"><path class="gx26emb1z"/><path class="zg9uhs63y"/></g>`,
		"fallback": "openmoji:wood",
	});
}

export default Component;

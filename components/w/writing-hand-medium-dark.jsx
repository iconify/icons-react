import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/migimfbrt.css';
import '../../css/s/s48mb-b2h.css';
import '../../css/h/h51tn0b6q.css';
import '../../css/d/dhh86kbkq.css';
import '../../css/t/ttrl-dbmq.css';
import '../../css/b/bghxu59cd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="migimfbrt"/><path class="s48mb-b2h"/><path class="h51tn0b6q"/><path class="dhh86kbkq"/><path class="ttrl-dbmq"/><path class="bghxu59cd"/></g>`,
		"fallback": "fluent-emoji-flat:writing-hand-medium-dark",
	});
}

export default Component;

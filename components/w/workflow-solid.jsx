import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/loqn9e2fq.css';
import '../../css/e/ex-ck7ovn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="loqn9e2fq"/><path class="ex-ck7ovn wm-a"/></g>`,
		"fallback": "withicons:workflow-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/odzar8bfb.css';
import '../../css/q/qq8e05b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="odzar8bfb"/><path class="qq8e05b9i"/></g></g>`,
		"fallback": "cuida:x-outline",
	});
}

export default Component;

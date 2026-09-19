import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/orqvh-kdy.css';
import '../../css/g/givk2pbvk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="orqvh-kdy"/><path class="givk2pbvk"/></g>`,
		"fallback": "cryptocurrency-color:wgr",
	});
}

export default Component;

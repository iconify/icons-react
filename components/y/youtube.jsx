import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yllohy-5g.css';
import '../../css/y/ycu5lle2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yllohy-5g"/><path class="ycu5lle2a"/></g>`,
		"fallback": "lucide:youtube",
	});
}

export default Component;

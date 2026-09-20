import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c8kru0bnv.css';
import '../../css/o/oghbaxbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c8kru0bnv"/><path class="oghbaxbqc"/></g>`,
		"fallback": "lucide:wheat",
	});
}

export default Component;

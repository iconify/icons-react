import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wmz9b2bsu.css';
import '../../css/p/pwgf32d7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wmz9b2bsu"/><path class="pwgf32d7i"/></g>`,
		"fallback": "lucide-lab:windmill",
	});
}

export default Component;

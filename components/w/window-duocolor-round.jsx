import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/adiypubxg.css';
import '../../css/l/ln97n7b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="adiypubxg"/><path class="ln97n7b5n"/></g>`,
		"fallback": "coolicons:window-duocolor-round",
	});
}

export default Component;

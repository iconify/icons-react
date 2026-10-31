import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/musryfdwh.css';
import '../../css/l/ls9gi1bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="musryfdwh"/><path class="ls9gi1bjl"/></g>`,
		"fallback": "coolicons:wolf-duocolor-round",
	});
}

export default Component;

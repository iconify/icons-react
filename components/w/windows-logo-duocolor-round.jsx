import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h514dgbdz.css';
import '../../css/v/vap96bb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h514dgbdz"/><path class="vap96bb9k"/></g>`,
		"fallback": "coolicons:windows-logo-duocolor-round",
	});
}

export default Component;

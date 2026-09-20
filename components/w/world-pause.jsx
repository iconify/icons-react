import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g-_vthbqy.css';
import '../../css/i/ivo0b9i9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g-_vthbqy"/><path class="ivo0b9i9d"/></g>`,
		"fallback": "tabler:world-pause",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qdy_ubbsn.css';
import '../../css/y/yj0guvgum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qdy_ubbsn"/><path class="yj0guvgum"/></g>`,
		"fallback": "coolicons:weight-duocolor-round",
	});
}

export default Component;

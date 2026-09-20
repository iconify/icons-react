import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/ds4ca-zun.css';
import '../../css/s/sp0reab0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ds4ca-zun"/><path class="sp0reab0f"/></g>`,
		"fallback": "keyline-icons:zap-two-tone",
	});
}

export default Component;

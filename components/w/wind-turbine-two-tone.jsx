import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iq62dem-e.css';
import '../../css/i/ii-0rpopf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iq62dem-e"/><path class="ii-0rpopf"/></g>`,
		"fallback": "keyline-icons:wind-turbine-two-tone",
	});
}

export default Component;

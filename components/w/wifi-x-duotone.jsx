import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o9cu_zd4c.css';
import '../../css/s/sudo-1bgw.css';
import '../../css/n/n2dladjxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o9cu_zd4c"/><path class="sudo-1bgw"/><path class="n2dladjxv"/></g>`,
		"fallback": "keyline-icons:wifi-x-duotone",
	});
}

export default Component;

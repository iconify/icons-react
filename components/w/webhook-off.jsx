import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ck0xhytuv.css';
import '../../css/f/fe1cfsbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ck0xhytuv"/><path class="fe1cfsbpf"/></g>`,
		"fallback": "tabler:webhook-off",
	});
}

export default Component;

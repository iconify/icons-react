import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-earhali.css';
import '../../css/i/iubxhh0ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="t-earhali"/><path class="iubxhh0ze"/></g>`,
		"fallback": "lucide:zodiac-taurus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ha84-bnhp.css';
import '../../css/t/t4ghwlb5k.css';
import '../../css/h/ho34uhwef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ha84-bnhp"/><path class="t4ghwlb5k"/><path class="ho34uhwef"/></g>`,
		"fallback": "keyline-icons:zap-sparkles-two-tone",
	});
}

export default Component;

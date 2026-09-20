import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rl_p2s3kc.css';
import '../../css/x/xi4n6f8tg.css';
import '../../css/k/k45hr2bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rl_p2s3kc"/><path class="xi4n6f8tg"/><circle class="k45hr2bcn"/></g>`,
		"fallback": "lucide:weight-tilde",
	});
}

export default Component;

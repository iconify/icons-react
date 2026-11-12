import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rllixy2pz.css';
import '../../css/d/d7qghsrap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rllixy2pz"/><path class="d7qghsrap"/>`,
		"fallback": "selfhst:webhook-tester-dark",
	});
}

export default Component;

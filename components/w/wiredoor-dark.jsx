import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1se23bda.css';
import '../../css/v/v0_257bnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1se23bda"/><path class="v0_257bnn"/>`,
		"fallback": "selfhst:wiredoor-dark",
	});
}

export default Component;

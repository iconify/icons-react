import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8yqf-bcq.css';
import '../../css/l/lcji6ciap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a8yqf-bcq"/><path class="lcji6ciap"/>`,
		"fallback": "selfhst:yubal-dark",
	});
}

export default Component;

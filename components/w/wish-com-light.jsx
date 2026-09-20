import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpbej1ewd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpbej1ewd"/>`,
		"fallback": "selfhst:wish-com-light",
	});
}

export default Component;

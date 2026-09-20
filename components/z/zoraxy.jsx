import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3p79uh_k.css';
import '../../css/h/h68tk6bxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3p79uh_k"/><path class="h68tk6bxc"/>`,
		"fallback": "selfhst:zoraxy",
	});
}

export default Component;

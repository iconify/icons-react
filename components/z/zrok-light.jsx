import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn7gr5tgt.css';
import '../../css/j/jm_1qebhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn7gr5tgt"/><path class="jm_1qebhn"/>`,
		"fallback": "selfhst:zrok-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gar-mkovf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gar-mkovf"/>`,
		"fallback": "selfhst:zimaos-light",
	});
}

export default Component;

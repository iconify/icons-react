import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsb9y4bou.css';
import '../../css/g/gwtyn9bdy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsb9y4bou"/><path class="gwtyn9bdy"/>`,
		"fallback": "selfhst:worklenz",
	});
}

export default Component;

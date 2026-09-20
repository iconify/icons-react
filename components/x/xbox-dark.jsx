import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mft8lsbyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mft8lsbyc"/>`,
		"fallback": "selfhst:xbox-dark",
	});
}

export default Component;

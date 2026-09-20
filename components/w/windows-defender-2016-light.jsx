import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvdhn8bwj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvdhn8bwj"/>`,
		"fallback": "selfhst:windows-defender-2016-light",
	});
}

export default Component;

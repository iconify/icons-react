import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlyrpgbor.css';
import '../../css/u/u7_wj4bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlyrpgbor"/><path class="u7_wj4bzn"/>`,
		"fallback": "solar:weigher-bold-duotone",
	});
}

export default Component;

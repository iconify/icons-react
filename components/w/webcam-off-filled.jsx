import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5-qb4ycp.css';
import '../../css/l/l4r5fel4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5-qb4ycp"/><path class="l4r5fel4i"/>`,
		"fallback": "lucide-extended:webcam-off-filled",
	});
}

export default Component;

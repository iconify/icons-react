import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sotyw2bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sotyw2bol"/>`,
		"fallback": "lucide-lab:whisk-fork-knife",
	});
}

export default Component;

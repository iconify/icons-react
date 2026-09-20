import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy6di_b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy6di_b6h"/>`,
		"fallback": "lucide:wifi",
	});
}

export default Component;

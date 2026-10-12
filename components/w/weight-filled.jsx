import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci2lnnikp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ci2lnnikp"/>`,
		"fallback": "lucide-extended:weight-filled",
	});
}

export default Component;

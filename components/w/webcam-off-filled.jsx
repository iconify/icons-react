import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv_363bea.css';
import '../../css/t/t6xotcc8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fv_363bea"/><path class="t6xotcc8u"/>`,
		"fallback": "lucide-extended:webcam-off-filled",
	});
}

export default Component;

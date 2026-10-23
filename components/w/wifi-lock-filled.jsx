import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf-j6_d6b.css';
import '../../css/u/uzsvwtbuf.css';
import '../../css/u/uxrmrdb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yf-j6_d6b"/><path class="uzsvwtbuf"/><path class="uxrmrdb4t"/>`,
		"fallback": "lucide-extended:wifi-lock-filled",
	});
}

export default Component;

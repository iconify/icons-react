import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf-j6_d6b.css';
import '../../css/t/t45b4tbro.css';
import '../../css/f/f1ziukbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yf-j6_d6b"/><path class="t45b4tbro"/><path class="f1ziukbyf"/>`,
		"fallback": "lucide-extended:wifi-lock-filled",
	});
}

export default Component;

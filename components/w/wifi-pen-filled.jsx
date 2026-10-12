import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjocleb1j.css';
import '../../css/b/b54fotqqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjocleb1j"/><path class="b54fotqqt"/>`,
		"fallback": "lucide-extended:wifi-pen-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxtrb1b8k.css';
import '../../css/h/ho146fqck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxtrb1b8k"/><path class="ho146fqck"/>`,
		"fallback": "prime:window-minimize",
	});
}

export default Component;

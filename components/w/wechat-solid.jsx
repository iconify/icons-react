import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/llac4cb8o.css';
import '../../css/b/b4rmc7hja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="llac4cb8o"/><path class="b4rmc7hja"/></g>`,
		"fallback": "basil:wechat-solid",
	});
}

export default Component;

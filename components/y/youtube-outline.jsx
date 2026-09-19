import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uuhb8m3bo.css';
import '../../css/k/kje1ywpqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uuhb8m3bo"/><path class="kje1ywpqo"/></g>`,
		"fallback": "basil:youtube-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w78n7-3yy.css';
import '../../css/u/uom6nnbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w78n7-3yy"/><path class="uom6nnbta"/></g>`,
		"fallback": "lineicons:youtube-music",
	});
}

export default Component;

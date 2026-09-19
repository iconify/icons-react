import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6lwejbts.css';
import '../../css/b/b12gxvr_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6lwejbts"/><circle class="b12gxvr_k"/>`,
		"fallback": "bxs:yin-yang",
	});
}

export default Component;

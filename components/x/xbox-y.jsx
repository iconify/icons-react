import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wzhcr9b1p.css';
import '../../css/n/n7fkz5-xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wzhcr9b1p"/><path class="n7fkz5-xq"/></g>`,
		"fallback": "tabler:xbox-y",
	});
}

export default Component;

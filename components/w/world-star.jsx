import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jgo801f-k.css';
import '../../css/g/gua47d-tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jgo801f-k"/><path class="gua47d-tf"/></g>`,
		"fallback": "tabler:world-star",
	});
}

export default Component;

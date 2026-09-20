import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nvog0ac-c.css';
import '../../css/f/fojz1b72c.css';
import '../../css/h/ha2_ye_sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nvog0ac-c"/><path class="fojz1b72c"/><path class="ha2_ye_sq"/></g>`,
		"fallback": "tabler:wheat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfpkjvbpk.css';
import '../../css/o/okas3_bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tfpkjvbpk"/><path class="okas3_bqo"/></g>`,
		"fallback": "tabler:wheat-off",
	});
}

export default Component;

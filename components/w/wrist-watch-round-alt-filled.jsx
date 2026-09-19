import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nldaqvbfh.css';
import '../../css/g/g4qvddbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nldaqvbfh"/><path class="g4qvddbfp"/>`,
		"fallback": "boxicons:wrist-watch-round-alt-filled",
	});
}

export default Component;

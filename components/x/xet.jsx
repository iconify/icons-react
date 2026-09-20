import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhle38bke.css';
import '../../css/f/fsl5_2myu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhle38bke"/><path class="fsl5_2myu"/>`,
		"fallback": "token:xet",
	});
}

export default Component;

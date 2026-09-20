import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azosf2fdp.css';
import '../../css/f/folb2v_pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azosf2fdp"/><path clip-rule="evenodd" class="folb2v_pu"/>`,
		"fallback": "mingcute:whatsapp-line",
	});
}

export default Component;

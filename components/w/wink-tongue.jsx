import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe03g2-dk.css';
import '../../css/i/igs44wb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe03g2-dk"/><path class="igs44wb9p"/>`,
		"fallback": "boxicons:wink-tongue",
	});
}

export default Component;

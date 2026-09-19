import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt6mirb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yt6mirb2o"/>`,
		"fallback": "heroicons:wrench-solid",
	});
}

export default Component;

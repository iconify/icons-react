import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_x3yq_dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_x3yq_dc"/>`,
		"fallback": "token:wefi",
	});
}

export default Component;
